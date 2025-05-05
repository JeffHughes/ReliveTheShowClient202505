import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="left-container" [style.width.px]="layoutService.leftWidth()">
      <div class="content-wrapper" [class.hidden]="layoutService.leftWidth() < 250">
        <div class="logo-area">
          <!-- Logo placeholder -->
          <div class="logo-placeholder">LOGO</div>
        </div>
        <div class="menu-area">
          <!-- Menu placeholder -->
          <div class="menu-placeholder">MENU</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .left-container {
      height: 100%;
      background: linear-gradient(to bottom,  #001529, #000000);
      transition: width 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .content-wrapper {
      width: 250px;
      height: 100%;
      transition: transform 0.3s ease;
      padding: 20px;
      box-sizing: border-box;
    }

    .content-wrapper.hidden {
      transform: translateX(-100%);
    }

    .logo-area {
      padding: 20px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 20px;
    }

    .menu-area {
      flex: 1;
    }

    .logo-placeholder, .menu-placeholder {
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }
  `]
})
export class LeftComponent {
  constructor(public layoutService: LayoutService) {}
} 