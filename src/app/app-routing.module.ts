import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryListComponent } from './pages/enquiry-list/enquiry-list.component';
import { NewEnquiryComponent } from './pages/new-enquiry/new-enquiry.component';

const routes: Routes = [
  // {path:'' , redirectTo:'',pathMatch:'full'},
  {path:'enquiry-list' , component : EnquiryListComponent },
  {path:'new-enquiry' , component : NewEnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
