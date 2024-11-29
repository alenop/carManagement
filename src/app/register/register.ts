import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-car-form',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  private serviceAuth = inject(AuthenticationService);
  UserForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.UserForm = this.fb.group({
      username: ['', Validators.required],
      mail: ['', Validators.required],
      number: ['', Validators.required],
      motDePasse: ['', [Validators.required]],
    });
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }
  async onSubmit(): Promise<void> {
    if (this.UserForm.valid) {
      const formData = {
        ...this.UserForm.value,
      };
      console.log(formData);
      if(await this.serviceAuth.signIn(formData.mail,formData.motDePasse,formData.username)){
        this.router.navigate(['/home']);
      };
        
      
      
    }
  }
}
