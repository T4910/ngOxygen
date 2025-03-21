import { Component, inject, signal } from '@angular/core';
import { FormStateService } from '../../service/form-state.service';
import { VideoReviewComponent } from '../video-review/video-review.component';

@Component({
  selector: 'app-video-capture',
  imports: [VideoReviewComponent],
  templateUrl: './video-capture.component.html',
  styleUrl: './video-capture.component.css'
})
export class VideoCaptureComponent {
  formStateService = inject(FormStateService);
  data = this.formStateService.formData();
  error = signal<string | null>(null);
  recordingDone = signal(false);

  handleRecordingDone() {
    this.recordingDone.set(true);
  }
}

/** 
 * 'use client';

import { useLoanStore } from '@/store/loanStore';
import { useEffect, useRef, useState } from 'react';
import VideoReview from './VideoReview';

export default function VideoCapture() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [recordingDone, setRecordingDone] = useState(false);
  const { paymentPlanData: { loanAmount, monthlyPayment, duration, interestRate, repaymentDate }, customerInfo: { firstName } } = useLoanStore();
  const [error, setError] = useState<string | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError("Unable to access the camera. Please ensure your device has a camera and you have granted permission.");
      }
    };

    getVideo();

    return () => {
      stopVideoStream();
    };
  }, []);

  const stopVideoStream = () => {
    console.log('stopping video stream');
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      console.log('video stream stopped');
    }
  };

  const handleRecordingDone = () => {
    stopVideoStream();
    setRecordingDone(true);
  };

 */