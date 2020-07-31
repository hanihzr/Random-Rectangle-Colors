import { Observable } from 'rxjs/internal/Observable';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IRandomColor } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  private url: string = 'http://www.colr.org/json/color/random';

  constructor(private http: HttpClient) {}

  getColors() {
    return this.http.get(this.url) as Observable<IRandomColor>;
  }
}
