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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    let formcontrols = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z.'-]+"),
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z.'-]+"),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      pwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
    };
    this.registerform = this.fb.group(formcontrols);
  }
  get nom() {
    return this.registerform.get('nom');
  }
  get prenom() {
    return this.registerform.get('prenom');
  }
  get email() {
    return this.registerform.get('email');
  }
  get pwd() {
    return this.registerform.get('pwd');
  }

  ngOnInit(): void {}
  register(): void {
    const data = this.registerform.value;

    this.userService.Register(data).subscribe((res) => {
      if (res.data.id == null) {
        alert('error');
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }
}
