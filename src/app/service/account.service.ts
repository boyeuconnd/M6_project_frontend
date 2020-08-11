import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAccount} from '../models/iaccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private API_URL = 'http://localhost:8080/api/';

  constructor(private  http: HttpClient) { }

  getAccountList(): Observable<any>{
    return this.http.get(this.API_URL +'account');
  }
  editAccountInfo(data: any, id: number): Observable<IAccount>{
    return this.http.put<IAccount>(this.API_URL + id, data);
  }
  getAccount(id: number): Observable<IAccount>{
    return this.http.get<IAccount>(this.API_URL + 'find-one-user/' + id);
  }

}
