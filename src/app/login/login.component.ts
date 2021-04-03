import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signInForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    console.log(this.signInForm.value);
    this.authService.login(this.signInForm.value).subscribe((data) => {
      console.log(data);
      if (data.status === 'success') {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit(): void {}
}
