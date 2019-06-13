import { News, Doc, Prop, UploadTypes, DocTypes, Rate, ClientTypes, Contact, BaseEntity } from './models';
import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoadService } from './load.service';
import { UserService } from './user.service';


@Injectable()
export class WaterService{
    
    baseUrl:string='http://vdknf.ru/water/WaterController.php?';
    constructor(private http: HttpClient, private ls:LoadService, private us:UserService ){
    }

    

    getNews(){
      return this.http.get<News[]>(this.baseUrl + 'Key=get-news');
    }

    getQuestions(lim:number){
      return this.http.get<BaseEntity[]>(this.baseUrl + 'Key=get-questions&Limit='+lim);
    }

    search(str){
      return this.http.get<any>(this.baseUrl + 'Key=search&SearchString='+str);
    }

    getLimitNews(lim:number){
      return this.http.get<News[]>(this.baseUrl + 'Key=get-news&Limit='+lim);
    }

    getProps(){
      return this.http.get<Prop[]>(this.baseUrl + 'Key=get-props');
    }

    getTypeDocs(types:DocTypes[]){
      return this.http.post<Doc[]>(this.baseUrl + 'Key=get-type-docs',types);
    }

    getRates(type:ClientTypes){
      return this.http.get<Rate[]>(this.baseUrl + 'Key=get-rates&Type='+type);
    }

    getContacts(){
      return this.http.get<Contact[]>(this.baseUrl + 'Key=get-contacts');
    }

    getImportantDocs(){
      return this.http.get<Doc[]>(this.baseUrl + 'Key=get-important-docs');
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
      return this.http.post<News>(this.baseUrl + 'Key=add-news&Login='+encodeURIComponent(this.us.user.Login)+'&Password='+encodeURIComponent(this.us.user.Password), news);
    }

    updateNews(news){
      return this.http.post<number>(this.baseUrl + 'Key=update-news&Login='+encodeURIComponent(this.us.user.Login)+'&Password='+encodeURIComponent(this.us.user.Password), news);
    }

    addQuestion(q){
      return this.http.post<number>(this.baseUrl + 'Key=add-question&Login='+encodeURIComponent(this.us.user.Login)+'&Password='+encodeURIComponent(this.us.user.Password), q);
    }

    updateQuestion(q){
      return this.http.post<number>(this.baseUrl + 'Key=update-question&Login='+encodeURIComponent(this.us.user.Login)+'&Password='+encodeURIComponent(this.us.user.Password), q);
    }

    removeNews(id){
      return this.http.delete<number>(this.baseUrl + 'Key=remove-new&Login='+encodeURIComponent(this.us.user.Login)+'&Password='+encodeURIComponent(this.us.user.Password)+'&Id='+id);
    }

    removeQuestion(id){
      return this.http.delete<number>(this.baseUrl + 'Key=remove-question&Login='+encodeURIComponent(this.us.user.Login)+'&Password='+encodeURIComponent(this.us.user.Password)+'&Id='+id);
    }
    
}



