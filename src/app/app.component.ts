import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstName: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  hasFieldError(fieldName: string): boolean {
    return this.form.controls[fieldName].invalid && (this.submitted || this.form.controls[fieldName].touched);
  }
}
