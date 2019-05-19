import { News, Doc, Prop, UploadTypes } from './models';
import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadService } from './load.service';
import { UserService } from './user.service';


@Injectable()
export class WaterService{
    
    baseUrl:string='http://client.nomokoiw.beget.tech/water/WaterController.php?';
    constructor(private http: HttpClient, private ls:LoadService, private us:UserService ){
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

    /**
     * Загрузка файлов на сервер
     * @param id Id родителя изображения
     * @param type тип родителя изображения
     * @param data изображение (FormData)
     */
    UploadFile(id, type:UploadTypes, data) {
      return this.http.post<string>(this.baseUrl + 'Key=upload-file&Id='+id+'&Type='+type+'&Login='+encodeURIComponent(this.us.user.Login)+'&Password='+encodeURIComponent(this.us.user.Password), data, {
        reportProgress:true,
        observe:'events'
      });
    }

    addNews(news){
      return this.http.post<number>(this.baseUrl + 'Key=add-news&Login='+encodeURIComponent(this.us.user.Login)+'&Password='+encodeURIComponent(this.us.user.Password), news);
    }

    updateNews(news){
      return this.http.post<number>(this.baseUrl + 'Key=update-news&Login='+encodeURIComponent(this.us.user.Login)+'&Password='+encodeURIComponent(this.us.user.Password), news);
    }

    
}



