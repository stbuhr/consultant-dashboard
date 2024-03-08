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
import { TeamTeamroleWidgetComponent } from '../team-teamrole-widget/team-teamrole-widget.component';

@Component({
  selector: 'app-team-widget',
  standalone: true,
  imports: [
    CommonModule,
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
