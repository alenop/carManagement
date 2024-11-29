import { Injectable } from '@angular/core';
import * as firebase from "firebase/auth";
import { set, ref, getDatabase, get } from "firebase/database";
import { Observable,of } from 'rxjs';
export interface Car {
  upfront: string;
  behind: string;
  brand: string;
  id: string;
  model: string;
  rented:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public cars :{ [key: string]: Car } ={};
  
  constructor() { }
 
  public async addCar(brand:string,model:string,id:string,upfront:string,behind:string):Promise<void> {
    const database = getDatabase();
    await set(ref(database,"/cars/"+id),{brand,model,id,upfront,behind,rented:false});
  }

  public async getCars():  Promise<{ [key: string]: Car }> {
    const database = getDatabase();
    this.cars =(await get(ref(database,"/cars"))).val(); 
    return this.cars;
  }

  public getCarById(id: string): Car | null {
    if (this.cars[id]) { 
      return this.cars[id]
    } else {
      return null;
    }
  }
}
