import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-top-mobile-spacer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [style.height.px]="layoutService.headerHeight()"></header>
  `,
  styles: [`
    header {
      width: 100%;
      background-color: #111;
      transition: height 0.3s ease;
    }  
  `]
})
export class TopMobileSpacerComponent {
  constructor(public layoutService: LayoutService) {}
} 