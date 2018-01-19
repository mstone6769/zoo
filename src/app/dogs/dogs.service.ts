import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class DogsService {

  constructor(private http: Http) { }
  getBreeds(): Observable<String[]> {
    return this.http.get('https://dog.ceo/api/breeds/list')
      .map(response => response.json().message);
  }
}
