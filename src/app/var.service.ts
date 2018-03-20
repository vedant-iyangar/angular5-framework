import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class VarService {
  variable: number = 0;
  constructor(private http: HttpClient) { }
  getVariableValue(): Promise<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .toPromise();
  }
}
