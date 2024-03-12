import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  computed,
  signal,
  effect,
} from '@angular/core';
import { SwitchComponent, SwitchOption } from '../switch/switch.component';

export interface Condition {
  filter: string;
  comparison: string;
}

@Component({
  selector: 'app-conditions-selector',
  standalone: true,
  imports: [CommonModule, SwitchComponent],
  templateUrl: './conditions-selector.component.html',
  styleUrl: './conditions-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionsSelectorComponent implements OnInit {
  leftSelection: SwitchOption = {
    title: 'Selbsteinschätzungen',
    value: 'self',
  };
  rightSelection: SwitchOption = {
    title: 'Fremdeinschätzungen',
    value: 'other',
  };
  comparison = 'normal';
  selectedFilter = signal('conditions');
  selectedComparison = signal('normal');

  leftComparison = computed(() =>
    this.selectedFilter() === 'conditions'
      ? { title: 'Selbsteinschätzungen', value: 'self' }
      : { title: 'Günstige Bedingungen', value: 'normal' }
  );

  rightComparison = computed(() =>
    this.selectedFilter() === 'conditions'
      ? { title: 'Fremdeinschätzungen', value: 'by-others' }
      : { title: 'Schwierige Bedingungen', value: 'difficult' }
  );

  @Output()
  selectedConditionChanged = new EventEmitter<Condition>();

  constructor() {
    effect(() => {
      console.log('selectedFilter', this.selectedFilter());
      console.log('selectedComparison', this.selectedComparison());

      this.selectedConditionChanged.emit({
        filter: this.selectedFilter(),
        comparison: this.selectedComparison(),
      });
    });
  }

  ngOnInit() {
    // this.emitConditionChanged();
  }

  // firstConditionsSelected(value: string) {
  //   switch (value) {
  //     case 'conditions':
  //       this.leftSelection = { title: 'Selbsteinschätzungen', value: 'self' };
  //       this.rightSelection = { title: 'Fremdeinschätzungen', value: 'other' };
  //       break;
  //     case 'self-other':
  //       this.leftSelection = { title: 'Günstige Bedingungen', value: 'normal' };
  //       this.rightSelection = {
  //         title: 'Schwierige Bedingungen',
  //         value: 'difficult',
  //       };
  //       break;
  //   }
  //   this.emitConditionChanged();
  // }

  // secondConditionSelected(value: string) {
  //   this.comparison = value;
  //   this.emitConditionChanged();
  // }

  // emitConditionChanged() {
  //   this.selectedConditionChanged.emit({
  //     left: {
  //       title: this.leftSelection.title,
  //       filter: this.leftSelection.value,
  //       comparison: this.comparison,
  //     },
  //     right: {
  //       title: this.rightSelection.title,
  //       filter: this.rightSelection.value,
  //       comparison: this.comparison,
  //     },
  //   });
  // }
}
