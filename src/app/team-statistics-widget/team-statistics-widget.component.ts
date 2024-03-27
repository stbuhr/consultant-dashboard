import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatisticsLineComponent } from '../statistics-line/statistics-line.component';

@Component({
  selector: 'app-team-statistics-widget',
  standalone: true,
  imports: [CommonModule, StatisticsLineComponent],
  templateUrl: './team-statistics-widget.component.html',
  styleUrl: './team-statistics-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamStatisticsWidgetComponent {}
