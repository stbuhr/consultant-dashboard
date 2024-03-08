import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CompetenceAtlasPreviewComponent } from '../competence-atlas-preview/competence-atlas-preview.component';

@Component({
  selector: 'app-team-competence-atlas-widget',
  standalone: true,
  imports: [CommonModule, CompetenceAtlasPreviewComponent],
  templateUrl: './team-competence-atlas-widget.component.html',
  styleUrl: './team-competence-atlas-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamCompetenceAtlasWidgetComponent {}
