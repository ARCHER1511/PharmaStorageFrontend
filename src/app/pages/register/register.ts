import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDTO } from '../../core/interfaces/RegisterDTO';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  registerData: RegisterDTO = {
    fullName: '',
    phoneNumber: '',
    jobTitle: '',
    email: '',
    password: '',
    confirmPassword: '',
    contractedCompanyName: '',
    nationalIdNumber: '',
    nationalIdFrontImage: null,
    nationalIdBackImage: null,
    authorizationLetterFile: null
  };

  isLoading = false;

  constructor(
    private authService: AuthService
  ) { }

  onFrontImageSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (input.files?.length) {
      this.registerData.nationalIdFrontImage = input.files[0];
    }
  }

  onBackImageSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (input.files?.length) {
      this.registerData.nationalIdBackImage = input.files[0];
    }
  }

  onAuthorizationSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (input.files?.length) {
      this.registerData.authorizationLetterFile = input.files[0];
    }
  }

  register(): void {

    this.isLoading = true;

    this.authService.register(this.registerData)
      .subscribe({
        next: (response) => {

          this.isLoading = false;

          if (response.success) {
            alert(response.message);
          } else {
            alert(response.message);
          }
        },

        error: (error) => {
          this.isLoading = false;
          console.error(error);
        }
      });
  }
}