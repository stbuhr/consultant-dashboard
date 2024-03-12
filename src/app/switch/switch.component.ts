import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
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
  leftOption = input<SwitchOption>({ title: 'Left Option', value: '' });
  rightOption = input<SwitchOption>({ title: 'Right Option', value: '' });

  @Output() selected = new EventEmitter<string>();

  switchChecked(event: Event) {
    const left = (event.target as HTMLInputElement).checked;
    this.selected.emit(
      left ? this.rightOption().value : this.leftOption().value
    );
  }
}
