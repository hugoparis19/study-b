import { Component } from '@angular/core';
import { MyFormsComponent } from './my-forms/my-forms.component';

@Component({
  standalone: true,
  imports: [MyFormsComponent],
  selector: 'study-b-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone-forms';
}
