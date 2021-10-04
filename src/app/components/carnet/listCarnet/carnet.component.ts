import { Component, Input, OnInit } from '@angular/core';
import { CarnetService } from 'src/app/services/carnet/carnet.service';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css'],
})
export class CarnetComponent implements OnInit {
  carneList: any[] = [];
  item: any;
  constructor(private carnetService: CarnetService) {}

  ngOnInit(): void {
    this.carnetService.getCarnets().subscribe((res) => {
      this.carneList = res.data;
    });
  }
  addCarnet(carnet: any): void {
    this.carneList.push(carnet);

    this.carneList.sort((a: any, b: any) => a.nom.localeCompare(b.nom));
  }
  filtreListe(): void {
    this.carneList = this.carneList.filter(
      (c: any) =>
        c.nom.includes(this.item) ||
        c.prenom.includes(this.item) ||
        c.telephone === this.item ||
        c.region.includes(this.item)
    );
  }
}
