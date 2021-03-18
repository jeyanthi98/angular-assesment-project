import { AfterViewInit, Component, OnInit} from "@angular/core";
import { takeUntil } from 'rxjs/operators';
import { Subject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { DocumentListService } from "../document-list/document-list.service";
declare var $;
@Component({
    selector:'cmp-document-details',
    templateUrl:'document-details.component.html',
    styleUrls:['document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit,AfterViewInit{
  constructor(private documentService:DocumentListService,private route:ActivatedRoute){}
  
  public documentDetails:any={};
  public id:any;
  destroySubject$:Subject<any>=new Subject();
    ngOnInit(){
      this.id=this.route.snapshot.params.id;
      this.getDocumentDetails()
    }
    getDocumentDetails(){
      this.documentService.getDocumentDetails(this.id).pipe(takeUntil(this.destroySubject$)).subscribe((res:any)=>{
        this.documentDetails=res.data[0];
      })
    }
    ngAfterViewInit(){
        $('input[name="daterange"]').daterangepicker({
            opens: 'left'
          }, function(start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
          });
       
    
    }

}