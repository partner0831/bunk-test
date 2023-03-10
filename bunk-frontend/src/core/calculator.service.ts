import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// import environments
import { environment } from "../environments/environment";

import { UserInterface } from 'src/app/calculator/type';

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  private httpOptions = {};
  constructor(private http: HttpClient) {
    this.httpOptions = { headers: "Content-Type: application/json" };
  }

  calculateExpense(expenses: UserInterface[]): Observable<any> {
    return this.http.post(environment.serverURI + `/payouts`, { expenses }, this.httpOptions);
  }
}
