import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgramPreviewComponent } from './program-preview/program-preview.component';
import { SwitchComponent, SwitchOption } from './switch/switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgramPreviewComponent, SwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'consultant-dashboard';

  switcher = signal('left');
  leftOption = signal<SwitchOption>({ title: 'Links', value: 'links' });
  rightOption = signal<SwitchOption>({ title: 'Rechts', value: 'rechts' });

  constructor() {
    effect(() => {
      console.log('Switcher:', this.switcher());
    });
    setTimeout(() => {
      console.log('Timeout');
      this.leftOption.set({ title: 'Nach Links', value: '<--' });
      this.rightOption.set({ title: 'Nach Rechts', value: '-->' });
      console.log('Switcher after Timeout:', this.switcher());
    }, 3000);
  }
}
