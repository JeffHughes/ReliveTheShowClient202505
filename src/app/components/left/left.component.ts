import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';
import { StatusButtonComponent } from '../status-button/status-button.component';
import { StatsTableComponent } from '../stats-table/stats-table.component';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [CommonModule, StatusButtonComponent, StatsTableComponent],
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent {
  constructor(public layoutService: LayoutService) {}
} 