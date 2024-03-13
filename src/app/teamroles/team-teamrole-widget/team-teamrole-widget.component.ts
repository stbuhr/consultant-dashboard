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
