import { Observable } from 'rxjs/internal/Observable';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IRandomColor } from '../models';
import { SharedLibModule } from '../shared-lib.module';

@Injectable({
  providedIn: SharedLibModule,
})
export class ColorsService {
  private url: string = 'http://www.colr.org/json/color/random';

  constructor(private http: HttpClient) {}

  getColors(): Observable<IRandomColor> {
    const params = {
      er: Date.now().toLocaleString(),
    };
    return this.http.get(this.url, { params }) as Observable<IRandomColor>;
  }
}
