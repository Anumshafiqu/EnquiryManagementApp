import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrl: './enquiry-list.component.css'
})
export class EnquiryListComponent implements OnInit {
  constructor(private masterservice: MasterService) { }
  // enquiryList: any[] = [];
  // filetObj: any = {
  //   "customerName": "",
  //   "contactNo": "",
  //   "email": "",
  //   "enquiryStatusId": null,
  //   "enquirySubjectId": null,
  //   "fromDate": "",
  //   "toDate": ""
  // }
  // ngOnInit(): void {
  //   this.loadAllEnquiry();
  // }
  // filter() {
  //   this.masterservice.filterenquiry(this.filetObj).subscribe((res:any) => {
  //     this.enquiryList = res.data;
  //   })
  // }
  // filter() {
  //   if (this.filetObj.fromDate) {
  //     this.filetObj.fromDate = new Date(this.filetObj.fromDate).toISOString().split('T')[0];
  //   }
  //   if (this.filetObj.toDate) {
  //     this.filetObj.toDate = new Date(this.filetObj.toDate).toISOString().split('T')[0];
  //   }
  
  //   console.log('Sending Filter Criteria:', this.filetObj);
  
  //   this.masterservice.filterenquiry(this.filetObj).subscribe(
  //     (res: any) => {
  //       this.enquiryList = res.data;
  //       console.log('Filtered Results:', this.enquiryList);
  //     },
  //     (error) => {
  //       console.error('Error fetching filtered data:', error);
  //     }
  //   );
  // }
  
  

  

  
  // loadAllEnquiry() {
  //   this.masterservice.getAllEnqury().subscribe((res: any) => {
  //     this.enquiryList = res.data;
  //   })
  // }
  // reset() {
  //   this.filetObj = {
  //     "customerName": "",
  //     "contactNo": "",
  //     "email": "",
  //     "enquiryStatusId": null,
  //     "enquirySubjectId": null,
  //     "fromDate": "",
  //     "toDate": ""
  //   }
  //   this.loadAllEnquiry();
  // }











  // List of all enquiries fetched from the API
  enquiryList: any[] = [];

  // Filter object to store filter criteria
  filetObj: any = {
    customerName: '',
    contactNo: '',
    email: '',
    fromDate: '',
    toDate: ''
  };

  // Filtered enquiries that will be displayed on the UI
  filteredEnquiries: any[] = [];


  ngOnInit(): void {
    // Load all enquiries initially
    this.loadAllEnquiry();
  }

  loadAllEnquiry(): void {
    this.masterservice.getAllEnqury().subscribe((res: any) => {
      this.enquiryList = res.data; // Store all the data fetched from the API
      this.filteredEnquiries = [...this.enquiryList]; // Initially show all the data in filteredEnquiries
    });
  }
  // Method to filter the enquiries based on the user input
  filter(): void {
    console.log('Filter Criteria:', this.filetObj);

    // Apply filtering logic based on the entered filter criteria
    this.filteredEnquiries = this.enquiryList.filter(item => {
      return (
        (this.filetObj.customerName ? item.customerName.toLowerCase().includes(this.filetObj.customerName.toLowerCase()) : true) &&
        (this.filetObj.contactNo ? item.contactNo.includes(this.filetObj.contactNo) : true) &&
        (this.filetObj.email ? item.email.toLowerCase().includes(this.filetObj.email.toLowerCase()) : true) &&
        (this.filetObj.fromDate ? new Date(item.createdDate) >= new Date(this.filetObj.fromDate) : true) &&
        (this.filetObj.toDate ? new Date(item.createdDate) <= new Date(this.filetObj.toDate) : true)
      );
    });

    console.log('Filtered Results:', this.filteredEnquiries);
  }

  // Method to reset the filter criteria and show all enquiries again
  reset(): void {
    // Reset filter fields
    this.filetObj = {
      customerName: '',
      contactNo: '',
      email: '',
      fromDate: '',
      toDate: ''
    };

    // Reset the filteredEnquiries to show all the data again
    this.filteredEnquiries = [...this.enquiryList];
  }
}
