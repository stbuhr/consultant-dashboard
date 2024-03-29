import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TeamWidgetComponent } from '../team-widget/team-widget.component';
import { ProgramWidgetType, ProgramWidgetInfo } from '../widget-infos';

@Component({
  selector: 'app-program-preview',
  standalone: true,
  imports: [CommonModule, TeamWidgetComponent],
  templateUrl: './program-preview.component.html',
  styleUrl: './program-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramPreviewComponent {
  widgetInfos: ProgramWidgetInfo[] = [
    {
      title: 'Aktueller Status',
      type: 'CurrentTeamStatus',
      url: '#',
    },
    {
      title: 'Team-Kompetenzprofil',
      type: 'TeamCompetenceProfile',
      url: '#',
    },
    {
      title: 'Team-Kompetenzatlas',
      type: 'TeamCompetenceAtlas',
      url: '#',
    },
    {
      title: 'Teamrolle',
      type: 'TeamTeamrole',
      url: '#',
    },
  ];
}
