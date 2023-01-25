import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'study-b-choose-quantity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChooseQuantityComponent,
    },
  ],
})
export class ChooseQuantityComponent implements ControlValueAccessor {
  quantity = 0;

  @Input() increment = 0;

  disabled = false;
  touched = false;

  onChange = (quantity: number) => {
    console.log('onChange', quantity);
  };

  onTouched = () => {
    console.log('onTouched');
  };

  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
  }

  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
  }

  writeValue(quantity: number): void {
    this.quantity = quantity;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
