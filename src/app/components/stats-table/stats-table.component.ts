import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-stats-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.scss']
})
export class StatsTableComponent {
  constructor(private statusService: StatusService) {}

  hasStats() {
    return this.statusService.getStatus() !== 'logged out';
  }
} 