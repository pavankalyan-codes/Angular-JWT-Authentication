import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  message: string = '';
  status: string = '';
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      email: [''],
      password: [''],
      confirmPassword: [''],
    });
  }

  ngOnInit(): void {}

  register() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe((data) => {
      console.log(data);
      this.message = data.message;
      this.status = data.status;
    });
  }
}
