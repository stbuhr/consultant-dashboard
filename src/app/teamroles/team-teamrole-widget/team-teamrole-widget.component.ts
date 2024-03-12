import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { TeamTeamroleGraphComponent } from '../team-teamrole-graph/team-teamrole-graph.component';
import { SwitchComponent, SwitchOption } from '../../switch/switch.component';
import {
  Condition,
  ConditionsSelectorComponent,
} from '../../conditions-selector/conditions-selector.component';

@Component({
  selector: 'app-team-teamrole-widget',
  standalone: true,
  imports: [
    CommonModule,
    TeamTeamroleGraphComponent,
    SwitchComponent,
    ConditionsSelectorComponent,
  ],
  templateUrl: './team-teamrole-widget.component.html',
  styleUrl: './team-teamrole-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamTeamroleWidgetComponent {
  leftSelection: SwitchOption = {
    title: 'Selbsteinschätzungen',
    value: 'self',
  };
  rightSelection: SwitchOption = {
    title: 'Fremdeinschätzungen',
    value: 'other',
  };
  leftAssessment = signal<string>('Günstige Bedingungen');
  rightAssessment = signal<string>('Schwieirige Bedingungen');

  conditionsSelected(value: string) {
    switch (value) {
      case 'conditions':
        this.leftSelection = { title: 'Selbsteinschätzungen', value: 'self' };
        this.rightSelection = { title: 'Fremdeinschätzungen', value: 'other' };
        this.leftAssessment = signal<string>('Günstige Bedingungen');
        this.rightAssessment = signal<string>('Schwieirige Bedingungen');
        break;
      case 'self-other':
        this.leftSelection = { title: 'Günstige Bedingungen', value: 'normal' };
        this.rightSelection = {
          title: 'Schwierige Bedingungen',
          value: 'difficult',
        };
        this.leftAssessment = signal<string>('Selbsteinschätzungen');
        this.rightAssessment = signal<string>('Fremdeinschätzungen');
        break;
    }
  }

  conditionChanged(condition: Condition) {
    console.log('condition changed', condition);
  }
}
