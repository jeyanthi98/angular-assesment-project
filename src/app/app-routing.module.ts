import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'document_list',
    component:DocumentListComponent
  },
  {
    path:'document_details/:id',
    component:DocumentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
