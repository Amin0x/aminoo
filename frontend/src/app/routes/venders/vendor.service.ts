import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.model';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  private apiUrl = 'http://localhost:3000/vendors';

  constructor(private http: HttpClient) {}

  addVendor(vendor: Vendor): Observable<Vendor> {
    return this.http.post<Vendor>(this.apiUrl, vendor);
  }
}
