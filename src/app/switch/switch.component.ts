import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  effect,
  input,
} from '@angular/core';

export interface SwitchOption {
  title: string;
  value: string;
}

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  leftOption = input<SwitchOption>({ title: 'Left Option', value: 'left' });
  rightOption = input<SwitchOption>({ title: 'Right Option', value: 'rigth' });

  @Input() value = 'left';
  @Output() valueChange = new EventEmitter<string>();

  private checkState = false;

  constructor() {
    effect(() => {
      if (this.checkState) {
        this.value = this.leftOption().value;
      } else {
        this.value = this.rightOption().value;
      }
      this.valueChange.emit(this.value);
    });
  }

  switchChecked(event: Event) {
    this.checkState = (event.target as HTMLInputElement).checked;
    this.value = this.checkState
      ? this.rightOption().value
      : this.leftOption().value;
    this.valueChange.emit(this.value);
  }
}
