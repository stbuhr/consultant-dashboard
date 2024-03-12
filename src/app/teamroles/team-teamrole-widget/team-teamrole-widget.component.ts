import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TeamTeamroleGraphComponent } from '../team-teamrole-graph/team-teamrole-graph.component';

@Component({
  selector: 'app-team-teamrole-widget',
  standalone: true,
  imports: [CommonModule, TeamTeamroleGraphComponent],
  templateUrl: './team-teamrole-widget.component.html',
  styleUrl: './team-teamrole-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamTeamroleWidgetComponent {
  comparison = signal<boolean>(false);
  comparisonTitle = 'Vergleich Bedingungen';
}
