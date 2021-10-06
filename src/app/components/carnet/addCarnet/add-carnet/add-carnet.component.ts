import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarnetService } from 'src/app/services/carnet/carnet.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-carnet',
  templateUrl: './add-carnet.component.html',
  styleUrls: ['./add-carnet.component.css'],
})
export class AddCarnetComponent implements OnInit {
  @Output() newCarnet = new EventEmitter();
  hide=false;
  form: FormGroup;
  regionList: any;
  constructor(private carnetService: CarnetService, private fb: FormBuilder) {
    let formcontrols = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z.'-]+"),
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z.'-]+"),
      ]),
      telephone: new FormControl('', [
        Validators.minLength(10),
        Validators.pattern('[0-9]+'),
      ]),
      region: new FormControl('',Validators.required,
      ),
    };
    this.form = this.fb.group(formcontrols);
  }

  ngOnInit(): void {
    this.carnetService.getRegion().subscribe((res) => {
      this.regionList = res;
    });
  }
  get nom() {
    return this.form.get('nom');
  }
  get prenom() {
    return this.form.get('prenom');
  }
  get telephone() {
    return this.form.get('telephone');
  }
  get region() {
    return this.form.get('region');
  }

  add(): void {
    const data = this.form.value;
    this.carnetService.addCarnet(data).subscribe((res) => {
      if (res.data.id == null) {
        alert('Exist');
      } else {
        this.hide=true;
        this.newCarnet.emit(res.data);
        
      }
    });
  }
}
