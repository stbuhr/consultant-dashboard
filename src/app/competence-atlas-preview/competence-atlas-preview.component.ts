import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-competence-atlas-preview',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './competence-atlas-preview.component.html',
  styleUrl: './competence-atlas-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetenceAtlasPreviewComponent { }
