import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-competence-profile-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './competence-profile-table.component.html',
  styleUrl: './competence-profile-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetenceProfileTableComponent { }
