import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-statistics-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics-line.component.html',
  styleUrl: './statistics-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsLineComponent {
  total = input<number>(100);
  ready = input<number>(0);
  started = input<number>(0);
  registered = input<number>(0);

  readyWidth = computed(() => `${(this.ready() / this.total()) * 100}%`);
  startedWidth = computed(() => `${(this.started() / this.total()) * 100}%`);
  registeredWidth = computed(
    () => `${(this.registered() / this.total()) * 100}%`
  );
}
