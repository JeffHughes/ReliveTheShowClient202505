import { Component, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-status-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="status-button" (click)="handleClick()">
      {{ buttonText() }}
    </button>
  `,
  styles: [`
    .status-button {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #ffffff;
      background-color: transparent;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
      color: #ffffff;
      text-align: center;
      font-weight: 500;
    }

    .status-button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `]
})
export class StatusButtonComponent {
  buttonText = computed(() => {
    return this.statusService.getStatus() === 'logged out' 
      ? 'Sign Up | Login' 
      : 'Logged In';
  });

  constructor(private statusService: StatusService) {}

  handleClick() {
    const currentStatus = this.statusService.getStatus();
    if (currentStatus === 'logged out') {
      // Here you would typically navigate to login/signup page
      console.log('Navigate to login/signup');
    }
  }
} 