import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transactions } from '../interfaces/transactions';
import { Details } from '../interfaces/details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient) { }

  private transactionsUrl = '/assets/transactions.json';


  getTransactionsServer(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(this.transactionsUrl);
  }

  getDetailsServer(id: string): Observable<Details> {

    return this.http.get<Details>('/assets/' + id + '.json');
  }
}
