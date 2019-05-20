
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
  Regular = 'regular',
  Important = 'important'
}

export enum UploadTypes{
    News = "new"
}