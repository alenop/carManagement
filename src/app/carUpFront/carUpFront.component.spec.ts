import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { carUpFrontComponent } from './carUpFront.component';

describe('CarUpFrontComponent', () => {
  let component: carUpFrontComponent;
  let fixture: ComponentFixture<carUpFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [carUpFrontComponent],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(carUpFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
