import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-car-form',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  private serviceAuth = inject(AuthenticationService);
  UserForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.UserForm = this.fb.group({
      mail: ['', [Validators.required],Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],

      motDePasse: ['', [Validators.required],Validators.pattern(/^.{6,}$/)], 
    });
  }
  goToSignIn(){
    this.router.navigate(['/register'])
  }
  async onSubmit(): Promise<void> {
    if (this.UserForm.valid) {
      const formData = {
        ...this.UserForm.value,
      };
      console.log(formData);
      if(await this.serviceAuth.getUserData(formData.mail,formData.motDePasse)){
        this.router.navigate(['/home']);
      };
        
      
      
    }
  }
}
