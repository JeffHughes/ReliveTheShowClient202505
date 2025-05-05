import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private status = signal<string>('logged out');

  constructor() { }

  setStatus(newStatus: string) {
    this.status.set(newStatus);
  }

  getStatus() {
    return this.status();
  }
} 