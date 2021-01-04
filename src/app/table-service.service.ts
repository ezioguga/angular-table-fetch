import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  constructor(private http:HttpClient) { }

  public getSource() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
