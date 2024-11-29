import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { carUpFrontComponent } from './carUpFront.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [carUpFrontComponent],
  exports: [carUpFrontComponent]
})
export class CarUpFrontComponentModule {}
