import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  Condition,
  ConditionsSelectorComponent,
} from '../conditions-selector/conditions-selector.component';

@Component({
  selector: 'app-competence-atlas-preview',
  standalone: true,
  imports: [CommonModule, ConditionsSelectorComponent],
  templateUrl: './competence-atlas-preview.component.html',
  styleUrl: './competence-atlas-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetenceAtlasPreviewComponent {
  leftAssessment = signal<string>('Normale Bedingungen');
  rightAssessment = signal<string>('Schwieirige Bedingungen');

  conditionChanged(condition: Condition) {
    console.log('condition changed', condition);
    switch (condition.filter) {
      case 'conditions':
        this.leftAssessment = signal<string>('Normale Bedingungen');
        this.rightAssessment = signal<string>('Schwieirige Bedingungen');
        break;
      case 'self-other':
        this.leftAssessment = signal<string>('Selbsteinschätzungen');
        this.rightAssessment = signal<string>('Fremdeinschätzungen');
        break;
    }
  }
}
