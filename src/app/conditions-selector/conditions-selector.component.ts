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
export class ConditionsSelectorComponent {
  selectedFilter = signal('conditions');
  selectedComparison = signal('normal');
  leftSelection = signal<SwitchOption>({
    title: 'Selbsteinschätzungen',
    value: 'self',
  });
  rightSelection = signal<SwitchOption>({
    title: 'Fremdeinschätzungen',
    value: 'other',
  });
  leftComparison = signal<SwitchOption>({
    title: 'Selbsteinschätzungen',
    value: 'self',
  });
  rightComparison = signal<SwitchOption>({
    title: 'Fremdeinschätzungen',
    value: 'other',
  });

  private _filter = 'conditions';

  @Output()
  selectedConditionChanged = new EventEmitter<Condition>();

  constructor() {
    effect(
      () => {
        this._filter = this.selectedFilter();
        if (this.selectedFilter() === 'conditions') {
          this.leftComparison.set({
            title: 'Selbsteinschätzungen',
            value: 'self',
          });
          this.rightComparison.set({
            title: 'Fremdeinschätzungen',
            value: 'other',
          });
        } else {
          this.leftComparison.set({
            title: 'Normale Bedingungen',
            value: 'normal',
          });
          this.rightComparison.set({
            title: 'Schwierige Bedingungen',
            value: 'difficult',
          });
        }
      },
      { allowSignalWrites: true }
    );
    effect(() => {
      this.selectedConditionChanged.emit({
        filter: this._filter,
        comparison: this.selectedComparison(),
      });
    });
  }
}
