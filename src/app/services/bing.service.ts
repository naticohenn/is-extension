//Angular services
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class BingService {
  uri : string = 'http://localhost:4000'
  constructor(private http : HttpClient) {  }
  
  getSuggestions(term : any){
    return this.http.get(`${this.uri}/${term}`).pipe(tap(
      data => data[1],
      error => console.log(error)
    ))
    };
};