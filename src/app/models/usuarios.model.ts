export class UsuariosModel {
    public id : number = 0;
    public name: string = '';
    public username: string  = '';
    public email : string = '';
    public phone: string = '';
    public website: string = '';
    public address: address;
    public company: company;
  constructor() {
    this.id = 0;
    this.name = '';
    this.username = ''
    this.email = '';
    this.phone = '';
    this.website = '';
    this.address = new address;
    this.company = new company;
  }
}

export class address {
  public street: string = '';
  public suite: string  = '';
  public city: string  = '';
  public zipcode: string  = '';
  public geo? : {
    lat: string;
    lng: string;
  }
}

export class company {
  public name : string  = '';
  public catchPhrase: string  = '';
  public bs: string  = '';

}
