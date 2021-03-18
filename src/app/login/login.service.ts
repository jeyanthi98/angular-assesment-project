import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
@Injectable()
export class LoginService{
    constructor(private http:HttpClient){}
    private url:any;
    login(data){
      this.url="token/authenticate";
      return this.http.post(this.url,data)
    }
}