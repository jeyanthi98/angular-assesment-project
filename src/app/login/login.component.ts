import { Component, OnDestroy, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { takeUntil } from 'rxjs/operators';
import { Subject } from "rxjs";
import { Router } from "@angular/router";
@Component({
    selector: 'cmp-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    constructor(private loginService: LoginService,private router:Router) { }
    destroySubject$: Subject<any> = new Subject();
    public loginData = {
        "Contact_Email": "",
        "password": ""
    }
    ngOnInit() {}
    login() {
        this.loginService.login(this.loginData).pipe(takeUntil(this.destroySubject$)).subscribe((res: any) => {
            if(res.apires==1){
                localStorage.setItem("token",res.data);
                this.router.navigate(['document_list'])
            }
        
        })
    }
    ngOnDestroy() {
        this.destroySubject$.next();
        this.destroySubject$.complete();
    }

}