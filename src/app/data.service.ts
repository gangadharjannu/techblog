import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://cors-anywhere.herokuapp.com/https://techieblog.herokuapp.com/api/topic/javascript'
  constructor(private http: HttpClient) {

  }
  getData() {
    return this.http.get(this.url);
  }
}
