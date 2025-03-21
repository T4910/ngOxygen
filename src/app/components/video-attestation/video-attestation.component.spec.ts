import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAttestationComponent } from './video-attestation.component';

describe('VideoAttestationComponent', () => {
  let component: VideoAttestationComponent;
  let fixture: ComponentFixture<VideoAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoAttestationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
