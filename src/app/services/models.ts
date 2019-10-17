
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

export class Rate{
    Id:number;
    Name:RateTypes;
    Type:ClientTypes;
    Prices:Price[];
}
export class Contact{
    Id:number;
    Head:string;
    Time:string;
    Boss:string;
    Phone:string[];
    Address:string[];
    Email:string[];
}
export class Price{
    Id:number;
    PriceTypeId:number;
    DateStart:Date;
    DateFinish:Date;
    Price:number;
}

export enum DocTypes{
  RefBook = 'ref-book',
  RatesPay = "rates-pay",
  RatesConnect = "rates-connect",
  Props = "props",
  Constituent = "constituent",
  Bookkeeping = "bookkeping",
  Allowing = "allowing",
  Evaluation = "evaluation",
  Important = 'important',
  Single = 'single'
}

export enum UploadTypes{
    News = "new",
    Docs = "doc"
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

export enum ContactTypes{
    Address = "address",
    Phone = "phone",
    Email = "email"
}

export enum VacancyType{
    Duty = "duty",
    Requirement = "requirement",
    Condition = "condition"
}

export interface Vacancy{
    Id: number;
    Name: string;
    WorkTime: string;
    Salary: string;
    Duties: VacancyItem[];
    Requirements: VacancyItem[];
    Conditions: VacancyItem[];
}

export interface VacancyItem{
    Id: number;
    Name: string;
    Type: VacancyType;
}