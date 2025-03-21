import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepProgressCircleComponent } from './step-progress-circle.component';

describe('StepProgressCircleComponent', () => {
  let component: StepProgressCircleComponent;
  let fixture: ComponentFixture<StepProgressCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepProgressCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepProgressCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
