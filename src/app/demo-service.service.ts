import { Injectable } from '@angular/core';
import { EmployeeArray } from './mock/employee-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageModel } from './mock/page-mock';


/* Injectable - need another service into this service, we need Injectable without fail, Example: HttpClientModule */
@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  /* URL - Local JSON */
  //public _url = "../assets/data/user-data.json";
  /* URL - Server JSON */
  public _url = "https://reqres.in/api/users?page=1";

  /* dependency - HttpClient */
  constructor(public httpClient : HttpClient) { }

  getNameOfArray() {
    return ["Bala", "Ram", "Vicky"];
  }

  getMockObjectNameOfArray() {
    return EmployeeArray;
  }

  getDatafromServer() : Observable<PageModel> {
    // get<Response>(URL)
    return this.httpClient.get<PageModel>(this._url);
  }

}
