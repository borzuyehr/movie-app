import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import  {RestAPIClass} from "@aws-amplify/api-rest";
import { API } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})


export class HttpDataUsersService {
  
  apiName = 'movieAppUsersApi';
  path = '/movies';
  myInit = { 
      headers: {'Content-Type': 'text/plain'}, 
              
    };
  constructor() {}
  
   getData() {
    return  API.get(this.apiName, this.path, this.myInit)
  }
  

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


}
