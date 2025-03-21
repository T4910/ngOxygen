import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormStateService } from '../../service/form-state.service';

@Component({
  selector: 'app-video-review',
  imports: [],
  templateUrl: './video-review.component.html',
  styleUrl: './video-review.component.css'
})
export class VideoReviewComponent {
  private router = inject(Router);
  private formStateService = inject(FormStateService);

  Redo(){
    this.formStateService.formData.set({
      employer: '',
      amount: '',
      duration: '',
      customerInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        bvn: '',
        ippiNumber: '',
        stateOfOrigin: ''
      }
    });
    
    this.router.navigateByUrl('/');
  }
}
