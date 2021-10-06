import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    let formcontrols = {
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    };
    this.loginform = this.fb.group(formcontrols);
  }
  ngOnInit(): void {}
  login(): void {
    const email: string = this.loginform.get('email')?.value;
    const password: string = this.loginform.get('password')?.value;

    this.userService.login(email, password).subscribe((res) => {
      console.log(res);
      if (res.data === null) {
        alert(' mot de passe ou email incorrect');
      } else {
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/home');
      }
    });
  }
}
