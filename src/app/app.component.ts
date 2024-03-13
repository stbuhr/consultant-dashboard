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
export class AppComponent {}
