import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ],
  template: `
    <fieldset [formGroupName]="controlKey">
      <legend>{{label}}</legend>
      <div class="form-field">
        <label for="zipCode">Zip code</label>
        <input formControlName="zipCode" type="text" id="zipCode"/>
      </div>
      <div class="form-field">
        <label for="street">Street</label>
        <input formControlName="street" type="text" id="street"/>
      </div>
    </fieldset>
  `
})
export class AddressGroupComponent implements OnInit, OnDestroy {
  @Input({ required: true }) controlKey = '';
  @Input() label = '';
  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
  this.parentFormGroup.addControl(this.controlKey,
     new FormGroup({
        zipCode: new FormControl(''),
        street: new FormControl('')
     }))
    }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
