import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CarDetailsPageRoutingModule } from './car-details-routing.module';
import { CarDetailsPage } from './car-details.page';

describe('CarDetailsPage', () => {
  let component: CarDetailsPage;
  let fixture: ComponentFixture<CarDetailsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CarDetailsPage],
      imports: [IonicModule.forRoot(), CarDetailsPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CarDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
