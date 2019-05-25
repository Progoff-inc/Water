
export class BaseEntity{
    Id:number;
    Name:string;
    Description:string;
}

export class App extends BaseEntity{
    Phone:string;
    Email:string;
    CreateDate:Date;
}
    
export class News extends BaseEntity{
    Image:string;
    Name: string;
    CreateDate:Date;
}
    
export class Doc{
    Id:number;
    Name:string;
    Image:string;
    Description?:string;
    Type?:DocTypes;
    Document?:string;
}

export class Prop{
    Id:number;
    Name:string;
    Value:string;
}

export enum DocTypes{
  RefBook = 'ref-book',
  RatesPay = "rates-pay",
  RatesConnect = "rates-connect",
  Props = "props",
  Constituent = "constituent",
  Bookkeeping = "bookkeping",
  Allowing = "allowing",
  Evaluation = "Evaluation",
  Important = 'important'
}

export enum UploadTypes{
    News = "new"
}

export enum RateTypes{
    GetWater = "get-water",
    GiveWater = "give-water",
    DrinkWater = "drink-water"
}

export enum ClientTypes{
    Client = "client",
    Business = "business"
}