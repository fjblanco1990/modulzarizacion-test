import { Component, OnInit } from '@angular/core';
import { take, tap, filter } from 'rxjs/operators';
import { UsuariosModel } from 'src/app/models/usuarios.model';
import { UsuariosService } from '../../service/usuarios.service';
import { AppState } from '../../service/app.state';
import { company } from '../../models/usuarios.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {
  //geter para mostrar los datos
  get users$(): Observable<UsuariosModel[]> {
    return this.appState.usersFilteredSubject.$();
  }

  constructor(private usuariosService: UsuariosService, private appState: AppState) { }

  ngOnInit(): void {
     this.getUsers();
  }

  private getUsers() {
    this.usuariosService.getUser().pipe(
      take(1),
      tap((users) => this.ManualMapper(users)),
      tap((users) => this.appState.usersSubject.set(users)),
      tap((users) => this.appState.usersFilteredSubject.set(users))
    ).subscribe();

  }

  private ManualMapper(data: any[]): UsuariosModel[] {
    return data.map(element => {
      return  {
        id: element.id,
        name: element.name,
        phone: element.phone,
        email: element.email,
        username: element.username,
        website: element.website,
        company: element.company,
        address: element.address,
      }
    });
  }

  public filterUsersByName(name: string): void {
    const users = this.appState.usersSubject.snapshot();
    if (!name) {
      this.appState.usersFilteredSubject.set(users);
    } else {
    const usersFiltered = users.filter((user) => user.name === name)
    this.appState.usersFilteredSubject.set(usersFiltered);
    }
  }



}
