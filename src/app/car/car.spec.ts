import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarComponent } from './car.component';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarComponent],
      imports: [ReactiveFormsModule, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty fields', () => {
    const form = component.carForm;
    expect(form.get('marque')?.value).toBe('');
    expect(form.get('modele')?.value).toBe('');
    expect(form.get('plaque')?.value).toBe('');
    expect(form.valid).toBeFalse();
  });

  it('should make the form valid when all fields are filled correctly', () => {
    const form = component.carForm;
    form.patchValue({
      marque: 'Toyota',
      modele: 'Corolla',
      plaque: 'ABC-1234',
    });
    expect(form.valid).toBeTrue();
  });

  it('should mark the form invalid when plaque is incorrect', () => {
    const form = component.carForm;
    form.patchValue({
      marque: 'Toyota',
      modele: 'Corolla',
      plaque: 'INVALID',
    });
    expect(form.valid).toBeFalse();
  });

  it('should handle file uploads correctly', () => {
    const file = new File(['dummy content'], 'photo.jpg', { type: 'image/jpeg' });
    const mockEvent = {
      target: { files: [file] },
    } as unknown as Event;

    component.onFileChange(mockEvent, 'avant');
    expect(component.photos.avant).toBe(file);

    component.onFileChange(mockEvent, 'arriere');
    expect(component.photos.arriere).toBe(file);
  });
});
