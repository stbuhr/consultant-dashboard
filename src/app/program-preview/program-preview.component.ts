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
      title: 'Team-Kompetenzprofil',
      type: 'TeamCompetenceProfile',
    },
    {
      title: 'Team-Kompetenzatlas',
      type: 'TeamCompetenceAtlas',
    },
    {
      title: 'Teamrolle',
      type: 'TeamTeamrole',
    },
  ];
}
