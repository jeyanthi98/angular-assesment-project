import { AfterViewInit, Component, OnInit} from "@angular/core";
import { DocumentListService } from "./document-list.service";
import { takeUntil } from 'rxjs/operators';
import { Subject } from "rxjs";
import { Router } from "@angular/router";
declare var $;
@Component({
    selector:'cmp-document-list',
    templateUrl:'document-list.component.html',
    styleUrls:['document-list.component.css']
})
export class DocumentListComponent implements OnInit,AfterViewInit{
  constructor(private documentService:DocumentListService,private router:Router){}
    public documentData={
      "Tenant_ID":"",
      "limit":"10",
      "pageNo":"1",
      "order":"-1",
      "search":"",
      "fieldName":"",
      "startDate":"",
      "endDate":"",
      "status":""
  };
  public documentList:any;
  destroySubject$:Subject<any>=new Subject();
    ngOnInit(){
      this.getDocumentList()
    }
    getDocumentList(){
      this.documentService.getDocumentList(this.documentData).pipe(takeUntil(this.destroySubject$)).subscribe((res:any)=>{
        this.documentList=res.data;
      })
    }
    ngAfterViewInit(){
        $('input[name="daterange"]').daterangepicker({
            opens: 'left'
          }, function(start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
          });
       
    
    }
    goToDetailPage(document){
      this.router.navigate(['document_details',document._id])
    }

}