import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
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
    this.UserForm = this.fb.group(
      {
        username: ['', Validators.required],
        mail: ['', [Validators.required, Validators.email]],
        number: ['', Validators.required],
        motDePasse: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.matchPasswords('motDePasse', 'confirmPassword'),
      }
  );
  }
  matchPasswords(password: string, confirmPassword: string) {
    return (formGroup: AbstractControl) => {
      const pass = formGroup.get(password);
      const confirmPass = formGroup.get(confirmPassword);

      if (confirmPass?.errors && !confirmPass.errors['passwordMismatch']) {
        // If another validator has already found an error, do nothing.
        return;
      }

      if (pass?.value !== confirmPass?.value) {
        confirmPass?.setErrors({ passwordMismatch: true }); // Set error
      } else {
        confirmPass?.setErrors(null); // Clear error
      }
    };
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
