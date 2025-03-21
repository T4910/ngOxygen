import { Component, signal } from '@angular/core';
import { VideoCaptureComponent } from '../video-capture/video-capture.component';

@Component({
  selector: 'app-video-attestation',
  imports: [VideoCaptureComponent],
  templateUrl: './video-attestation.component.html',
  styleUrl: './video-attestation.component.css'
})
export class VideoAttestationComponent {
  ready = signal(false);

  handleReady() {
    this.ready.set(true);
  }

  handleSkip() {
    console.log("User chose to skip the video attestation.");
    // Add logic to skip the video attestation
  }
}
