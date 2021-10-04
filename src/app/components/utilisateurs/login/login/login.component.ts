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
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    let formcontrols = {
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    };
    this.loginform = this.fb.group(formcontrols);
  }
  ngOnInit(): void {
  }
  login(): void {
    const data = this.loginform.value;

    this.userService.login(data).subscribe((res) => {
      if (res == null) {
        alert('erro');
      } else {
        this.router.navigateByUrl('/home');

       
      }
    });
  }
}
