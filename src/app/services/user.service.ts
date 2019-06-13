
import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from './modal.service';
import { LoadService } from './load.service';
// import { OnInit } from '@angular/core';

@Injectable()
export class UserService{
    public user;
    loading = false;
    baseUrl:string='http://vdknf.ru/water/WaterController.php?';

    constructor(private router:Router, private http: HttpClient, private ls:LoadService){
        // sessionStorage.removeItem('userWaterNar');
        // localStorage.removeItem('userWaterNar');
        if(sessionStorage.getItem('userWaterNar')){
            this.loading = true;
            let u = JSON.parse(sessionStorage.getItem('userWaterNar'));
            this.signIn(u.Login, u.Password).subscribe(data => {
                console.log(data);
                if(data){
                    this.User = {Login:u.Login, Password:u.Password};
                    this.save();
                }else{
                    if(this.router.url.indexOf('/admin')>-1){
                        this.router.navigate(['/sign-in']);
                    }
                    sessionStorage.removeItem('userWaterNar');
                }
                this.loading=false;
                
            })
            
        }
        else if(localStorage.getItem('userWaterNar')){
            this.loading = true;
            let u = JSON.parse(localStorage.getItem('userWaterNar'));
            this.signIn(u.Login, u.Password).subscribe(data => {
                console.log(data);
                if(data){
                    this.User = {Login:u.Login, Password:u.Password};
                    this.save();
                }else{
                    if(this.router.url.indexOf('/admin')>-1){
                        this.router.navigate(['/sign-in']);
                    }
                    localStorage.removeItem('userWaterNar');
                }
                this.loading=false;
            })
            
        }else{
            sessionStorage.removeItem('userWaterNar');
            localStorage.removeItem('userWaterNar');
            if(this.router.url.indexOf('/admin')>-1){
                this.router.navigate(['/sign-in']);
            }
        }
        
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            if(this.router.url.indexOf('/admin')>-1 && !this.loading && !this.user){
                this.router.navigate(['/sign-in']);
            }
        });
    }

    set User(User){
        this.user = User;
    }

    /**
     * Авторизация пользователя
     * @param login Login пользовтеля
     * @param password Пароль пользователя
     */
    public signIn(login:string, password:string){
        return this.http.get<any>(this.baseUrl + 'Key=enter-admin&Login='+encodeURIComponent(login)+'&Password='+encodeURIComponent(password));
    }

    /**
     * Сохрание данных пользователя онлайн
     * @param local сохранение пользователя в localStorage на клиенте
     */
    public save(local = false){
        if(local){
            localStorage.setItem('userWaterNar', JSON.stringify(this.user));
        }
        sessionStorage.setItem('userWaterNar', JSON.stringify(this.user));
    }

    public exit(){
        this.user=null;
        localStorage.removeItem('userWaterNar');
        sessionStorage.removeItem('userWaterNar');
        this.router.navigate(['/']);
    }
    
    /**
     * Генерация пароля
     */
    GenPassword(){
        let alf = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
        var res = "";
        for(let i = 0; i<10;i++){
            let r = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            if(r > 3 ){
               if(r>6){
                res+=alf[Math.floor(Math.random() * (alf.length-1 - 0 + 1)) + 0].toUpperCase().toString();
               }
               else{
                res+=alf[Math.floor(Math.random() * (alf.length-1 - 0 + 1)) + 0].toString();
               }
               
            }
            else{
                res+=r.toString();
            }
        }
        return res;

    }
}

