import { Component } from '@angular/core';
import { MyFormsComponent } from './my-forms/my-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  standalone: true,
  imports: [MyFormsComponent, ReactiveFormComponent],
  selector: 'study-b-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone-forms';
}
