import { HttpClient } from '@angular/common/http';
import { DoCheck, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService{

  constructor(private http: HttpClient) { 
    // console.log("service constructor");
  }
  ngOnInit(): void {
    console.log("service ngOnInit is called");
  }
  // ngDoCheck(){
  //   console.log("service ngDoCheck is called");
  // }
  getData() {
    console.log("in service")
    return this.http.get('http://10.230.16.104:8089/bookService/v1/category/');

  }
}
