import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-car-form',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  private data = inject(DataService);
  carForm: FormGroup;
  photoUrls: { avant?: string; arriere?: string } = {};

  constructor(private fb: FormBuilder,private router:Router) {
    this.carForm = this.fb.group({
      marque: ['', Validators.required],
      modele: ['', Validators.required],
      plaque: ['', [Validators.required, Validators.pattern(/^[A-Z0-9-]{1,10}$/)]],
    });
  }

  onFileChange(event: Event, type: 'avant' | 'arriere'): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        this.photoUrls[type] = URL.createObjectURL(input.files[0]);
    }
  }
  goBack(){
    this.router.navigate(["/car"])
  }
  onSubmit(): void {
    if (this.carForm.valid) {
      const formData = {
        ...this.carForm.value,
      };
      console.log('Form Submitted:', formData);
      if(this.photoUrls["avant"] && this.photoUrls["arriere"])
      this.data.addCar(formData.marque,formData.modele,formData.plaque,this.photoUrls["avant"],this.photoUrls['arriere']);
      this.router.navigate(['/car'])
    }
  }
}
