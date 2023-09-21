import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressGroupComponent } from './address-group/address-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, AddressGroupComponent],
  template: `
  <form [formGroup]="form" (ngSubmit)="submit()">
    <div class="form-field">
      <label>Name</label>
      <input formControlName="name" type="text" id="name">
      <app-address-group controlKey="deliveryAddress" label="Delivery Address"></app-address-group>
      <app-address-group controlKey="billingAddress" label="Billing Address"></app-address-group>
    </div>
    <button>Submit</button>
  </form>
  `
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl('')
  });

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
