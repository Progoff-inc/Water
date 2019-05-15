import { News, Doc, Prop } from './models';
import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadService } from './load.service';


@Injectable()
export class ClientService{
    
    baseUrl:string='http://client.nomokoiw.beget.tech/water/WaterController.php?';
    constructor(private http: HttpClient, private ls:LoadService ){
    }

    

    getNews(){
      return this.http.get<News[]>(this.baseUrl + 'Key=get-news');
    }

    getProps(){
      return this.http.get<Prop[]>(this.baseUrl + 'Key=get-props');
    }

    getTypeDocs(type:string){
      return this.http.get<Doc[]>(this.baseUrl + 'Key=get-type-docs&Type='+type);
    }

    getProp(name:string){
      return this.http.get<Prop>(this.baseUrl + 'Key=get-prop&Name='+name);
    }

    addApp(app){
      return this.http.post(this.baseUrl + 'Key=add-app', app);
    }

    
}



