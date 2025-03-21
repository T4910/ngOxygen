import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-step-progress-circle',
  imports: [],
  templateUrl: './step-progress-circle.component.html',
  styleUrl: './step-progress-circle.component.css'
})
export class StepProgressCircleComponent {
  currentStep = input(1);
  totalSteps = input(2);

  progress = computed(() => (this.currentStep() / this.totalSteps()) * 100);
}
