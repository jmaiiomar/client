import { Component, Input, OnInit } from '@angular/core';
import { CarnetService } from 'src/app/services/carnet/carnet.service';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css'],
})
export class CarnetComponent implements OnInit {
  carneList:any;
  nom: any;
  constructor(private carnetService: CarnetService) {}

  ngOnInit(): void {
    this.carnetService.getCarnets().subscribe((res) => {
      this.carneList = res.data;
      console.log(res.data);
    });
  }
  addCarnet(carnet:any): void {
    this.carneList.push(carnet);
    this.carneList.sort("nom");
    }
}
