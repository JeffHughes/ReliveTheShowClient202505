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
           <img src="../assets/images/logos/logo-name.png" 
           alt="Logo" class="logo">
        </div>
        <div class="menu-area">
          <div class="menu-item">
            <button class="menu-button" (click)="layoutService.showFooter.set(true)">
              Show Footer
            </button>
          </div>
          <div class="menu-item">
            <button class="menu-button" (click)="layoutService.showFooter.set(false)">
              Hide Footer
            </button>
          </div>
          <div class="menu-item">
            <button class="menu-button" (click)="toggleFooter()">
              Toggle Footer
            </button>
          </div>
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

    .menu-item {
      margin-bottom: 10px;
    }

    .menu-button {
      width: 100%;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .menu-button:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `]
})
export class LeftComponent {
  constructor(public layoutService: LayoutService) {}

  toggleFooter() {
    this.layoutService.showFooter.update(value => !value);
  }
} 