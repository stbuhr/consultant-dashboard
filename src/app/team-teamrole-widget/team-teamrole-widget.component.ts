import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-team-teamrole-widget',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './team-teamrole-widget.component.html',
  styleUrl: './team-teamrole-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamTeamroleWidgetComponent { }
