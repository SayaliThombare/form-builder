import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustFormService {
  formConfigUrl = 'assets/custForm.json';
  constructor(private http: HttpClient) {}

  getFormConfig() {
    return this.http.get(this.formConfigUrl);
  }
}