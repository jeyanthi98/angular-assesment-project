import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
@Injectable()
export class DocumentDetailsService{
    constructor(private http:HttpClient){}
    private url:any;
    getDocumentDetails(data){
      this.url="scans/scanDocByTenent";
      return this.http.post(this.url,data)
    }
}