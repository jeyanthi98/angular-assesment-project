import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
@Injectable()
export class DocumentListService{
    constructor(private http:HttpClient){}
    private url:any;
    getDocumentList(data){
      this.url="scans/scanDocByTenent";
      return this.http.post(this.url,data)
    }
    getDocumentDetails(id){
      this.url="scans/allScanByDocumentId/"+id;
      return this.http.get(this.url)
    }
}