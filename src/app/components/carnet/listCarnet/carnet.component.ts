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
  selected: any;
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
    if (this.item.length > 0) {
      this.carneList = this.carneList.filter(
        (c: any) =>
          c.nom.includes(this.item) ||
          c.prenom.includes(this.item) ||
          c.telephone === this.item ||
          c.region.includes(this.item)
      );
    } else {
      this.carnetService.getCarnets().subscribe((res) => {
        this.carneList = res.data;
      });
    }
  }
  select(id: any) {
    this.selected=id;
  }
  delete(): void {
    const id=this.selected

    this.carnetService.deleteCarnet(id).subscribe((res) => {
      var index = this.carneList.findIndex(function (o) {
        return o.id === id;
        ;
      });
      if (index !== -1) {
        this.carneList.splice(index, 1);
        this.carneList.sort((a: any, b: any) => a.nom.localeCompare(b.nom));
      }
    });
  }
}
