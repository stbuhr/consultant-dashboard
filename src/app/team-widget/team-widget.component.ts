import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ProgramWidgetInfo, defaultProgramWidgetInfo } from '../widget-infos';
import { TeamCompetenceProfileWidgetComponent } from '../team-competence-profile-widget/team-competence-profile-widget.component';
import { TeamCompetenceAtlasWidgetComponent } from '../team-competence-atlas-widget/team-competence-atlas-widget.component';
import { TeamTeamroleWidgetComponent } from '../teamroles/team-teamrole-widget/team-teamrole-widget.component';
import { TeamStatisticsWidgetComponent } from '../team-statistics-widget/team-statistics-widget.component';

@Component({
  selector: 'app-team-widget',
  standalone: true,
  imports: [
    CommonModule,
    TeamStatisticsWidgetComponent,
    TeamCompetenceProfileWidgetComponent,
    TeamCompetenceAtlasWidgetComponent,
    TeamTeamroleWidgetComponent,
  ],
  templateUrl: './team-widget.component.html',
  styleUrl: './team-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamWidgetComponent {
  widgetInfo = input<ProgramWidgetInfo>(defaultProgramWidgetInfo);
  title = computed(() => this.widgetInfo().title);
}
