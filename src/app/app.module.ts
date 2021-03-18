import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { CustomInterceptor } from './interceptor/http-interceptor';
import { DocumentListService } from './document-list/document-list.service';
import { DocumentDetailsComponent } from './document-details/document-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentListComponent,
    SidebarComponent,
    DocumentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    LoginService,
    DocumentListService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
