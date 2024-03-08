import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CompetenceProfileTableComponent } from '../competence-profile-table/competence-profile-table.component';

@Component({
  selector: 'app-team-competence-profile-widget',
  standalone: true,
  imports: [CommonModule, CompetenceProfileTableComponent],
  templateUrl: './team-competence-profile-widget.component.html',
  styleUrl: './team-competence-profile-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamCompetenceProfileWidgetComponent {}
