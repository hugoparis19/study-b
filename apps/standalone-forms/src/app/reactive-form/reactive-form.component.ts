import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { ChooseQuantityComponent } from '../choose-quantity/choose-quantity.component';

@Component({
  selector: 'study-b-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChooseQuantityComponent],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormComponent implements OnInit {
  // form = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });

  form = this.fb.group({
    firstName: ['', Validators.required],
    password: ['', Validators.required],
    totalQuantity: [60, [Validators.required, Validators.max(100)]],
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        map((value) => {
          value.firstName = value.firstName?.toUpperCase();
          return value;
        })
        // filter((value) => this.form.valid)
      )
      .subscribe((value) => {
        console.log('Reactive Form value: ', JSON.stringify(value));
        console.log('Reactive Form valid : ', this.form.valid);
      });
  }

  onSubmit() {
    console.log('reactive form submitted');
    // console.log(this.form);
  }

  fullUpdate() {
    this.form.setValue({
      firstName: 'Partial',
      password: 'monkey',
      totalQuantity: 0,
    });
  }

  partialUpdate() {
    this.form.patchValue({ firstName: 'Partial' });
  }
  reset() {
    this.form.reset();
  }
}
