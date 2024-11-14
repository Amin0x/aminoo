import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vendor } from '../vendor.model';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css'],
})
export class VendorFormComponent {
  vendor: Vendor = { name: '', address: '', phone: '', email: '' };

  constructor(private vendorService: VendorService) {}

  onSubmit(form: NgForm): void {
    this.vendorService.addVendor(this.vendor).subscribe(() => {
      form.reset();
      alert('Vendor added successfully!');
    });
  }
}
