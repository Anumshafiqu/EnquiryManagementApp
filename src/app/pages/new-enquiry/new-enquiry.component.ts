import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-new-enquiry',
  templateUrl: './new-enquiry.component.html',
  styleUrl: './new-enquiry.component.css'
})
export class NewEnquiryComponent implements OnInit{
  enquiryStatus:any[] = [];
  enquirySubject:any[] = [];
  enquiryList: any[] = [];
  enquiryObj :any ={
    "enquiryId": 0,
    "customerName": "",
    "contactNo": "",
    "altContactNo": "",
    "email": "",
    "enquiryStatusId": null,
    "enquirySubjectId": null,
    "createdDate": new Date(),
    "naration": ""
  }

constructor(private masterservice : MasterService){}
ngOnInit(): void {
  this.getAllStatus();
  this.getAllSubject();
}
getAllStatus(){
this.masterservice.getAllEnquryStatus().subscribe((res:any)=>{
  this.enquiryStatus = res.data;
})
}
getAllSubject(){
this.masterservice.getAllSubject().subscribe((res:any)=>{
  this.enquirySubject = res.data;
})
}
onSave(){
  this.masterservice.CreateNewEnquiry(this.enquiryObj).subscribe((res:any)=>{
    if(res.result){
      alert("Enquiry Created");
      this.enquiryList.push({...this.enquiryObj});
      this.resetForm();
    } else{
      alert(res.message)
    }
  })
}





resetForm() {
  this.enquiryObj = {
    "enquiryId": 0,
    "customerName": "",
    "contactNo": "",
    "altContactNo": "",
    "email": "",
    "enquiryStatusId": "",
    "enquirySubjectId": "",
    "createdDate": new Date(),
    "naration": ""
  };
}
}
