import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { carUpFrontComponent } from '../carUpFront/carUpFront.component';
import { DataService, Car } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private data = inject(DataService);
  public load:boolean=true;
  public carsP!:Promise<Car[]>;
  constructor(private router:Router) {
    
  }

  async ngOnInit(): Promise<void> {
    this.carsP = this.getCars();
  }
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
  GoToAddCar(){
    this.router.navigate(["/car/add"])
  }
  async getCars(): Promise< Car[]> {
    this.load=true;
    const data =  await this.data.getCars();
    console.log(data);
    this.load=false;
    console.log(Object.values(data));
    return Object.values(data);
  }
}
