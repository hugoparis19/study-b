import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type User = { firstName: string; password: string };
@Component({
  selector: 'study-b-my-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.scss'],
})
export class MyFormsComponent {
  user: User = {
    firstName: 'John',
    password: 'Doe',
  };

  onSubmitTemplateBased(value: User) {
    console.log(this.user);
  }
}
