import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private readonly MOBILE_BREAKPOINT = 768;
  
  readonly headerHeight = signal<number>(0);
  readonly leftWidth = signal<number>(0);

  constructor() {
    this.updateDimensions();
    window.addEventListener('resize', () => this.updateDimensions());
  }

  isDesktopSized(): boolean {
    return window.innerWidth > this.MOBILE_BREAKPOINT;
  }

  private updateDimensions() {
    const isMobile = window.innerWidth <= this.MOBILE_BREAKPOINT;
    this.headerHeight.set(isMobile ? 50 : 0);
    this.leftWidth.set(isMobile ? 0 : 250);
  }
} 