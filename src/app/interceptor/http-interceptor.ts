import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class CustomInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        const baseUrl:any="https://verify.flexm.com/api/";
        req = req.clone({
            url:baseUrl + req.url,
 
         });
         const token=localStorage.getItem("token");
         let newHeaders=req.headers;
         if(token!=undefined){
            newHeaders=newHeaders.append('access-token',token);
            const authReq=req.clone({headers:newHeaders});
            return next.handle(authReq)
         }
         else{
            return next.handle(req)

         }
     
    }
  

}
