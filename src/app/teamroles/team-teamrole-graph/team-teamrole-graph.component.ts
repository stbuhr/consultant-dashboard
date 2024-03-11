import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  WritableSignal,
  input,
  signal,
} from '@angular/core';
import { TranslocoService } from '../../transloco.service';

export type TeamRolesCompetence =
  | 'personal'
  | 'activityPersonal'
  | 'activity'
  | 'personalSocial'
  | 'activitySocial'
  | 'activityMethodical'
  | 'methodicalPersonal'
  | 'social'
  | 'methodicalSocial'
  | 'methodical'
  | 'middle';

export interface SegmentInfo {
  teamRolesCompetence: TeamRolesCompetence;
  value: number;
  text: string;
}

export interface SegmentPart {
  importance: number;
}

export interface Segment {
  number: number;
  value: number;
  text: string;
  radius: number;
  startAngle: number;
  endAngle: number;
  parts: SegmentPart[];
  isSelected: WritableSignal<boolean>;
}

export interface Point {
  x: number;
  y: number;
}

export const EMPTY_PART: SegmentPart = {
  importance: 0,
};

@Component({
  selector: 'app-team-teamrole-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-teamrole-graph.component.html',
  styleUrl: './team-teamrole-graph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamTeamroleGraphComponent implements OnInit {
  private _segments: Segment[] = [];
  private _cornerCount = 10;
  private _texts = [
    this.transloco.translate('trs_team-role.trk_activity-personal'),
    this.transloco.translate('trs_team-role.trk_activity'),
    this.transloco.translate('trs_team-role.trk_activity-methodical'),
    this.transloco.translate('trs_team-role.trk_methodical'),
    this.transloco.translate('trs_team-role.trk_methodical-social'),
    this.transloco.translate('trs_team-role.trk_social'),
    this.transloco.translate('trs_team-role.trk_activity-social'),
    this.transloco.translate('trs_team-role.trk_personal-social'),
    this.transloco.translate('trs_team-role.trk_methodical-personal'),
    this.transloco.translate('trs_team-role.trk_personal'),
    this.transloco.translate('trs_team-role.trk_middle'),
  ];
  private _maxValue = 0;
  private _sumValue = 0;

  width = input(160);
  height = input(160);

  title = signal('Teamrole');
  value = signal('0 von 0');
  percentage = signal('0%');

  get segments(): Segment[] {
    return this._segments;
  }

  constructor(private transloco: TranslocoService) {}

  ngOnInit(): void {
    if (this.segments.length == 0) {
      //initialize with dummy values for cases where no real segment infos were given via @Input "segmentInfos"
      for (let i = 0; i < this._cornerCount; i++) {
        const segment = this.initSegment(i, this._texts[i], 100);
        this.segments.push(segment);
      }
      const middle = this.initSegment(10, this._texts[10], 0);
      this.segments.push(middle);

      this.segments[0].value = 12;
      this.segments[1].value = 8;
      this.segments[2].value = 1;
      this.segments[3].value = 0;
      this.segments[4].value = 12;
      this.segments[5].value = 4;
      this.segments[6].value = 9;
      this.segments[7].value = 6;
      this.segments[8].value = 11;
      this.segments[9].value = 2;
      this.segments[10].value = 7;

      for (let i = 0; i < this._cornerCount; i++) {
        this.segments[i].text = this._texts[i];
      }
      middle.text = this._texts[10];

      this.segments.forEach((segment) => {
        this._maxValue = Math.max(this._maxValue, segment.value);
        this._sumValue += segment.value;
      });
    }
  }

  initSegment(index: number, text: string, radius: number): Segment {
    if (text == null || text == undefined || text == '')
      text = this._texts[index];

    return {
      number: index,
      value: 0,
      text: text,
      radius: radius,
      startAngle: (index * 2 * Math.PI) / this._cornerCount,
      endAngle: ((index + 1) * 2 * Math.PI) / this._cornerCount,
      parts: [
        {
          ...EMPTY_PART,
          importance: 4,
        },
        {
          ...EMPTY_PART,
          importance: 3,
        },
        {
          ...EMPTY_PART,
          importance: 2,
        },
        {
          ...EMPTY_PART,
          importance: 1,
        },
      ],
      isSelected: signal(false),
    };
  }

  isVeryHighLevel(segment: Segment): boolean {
    const value = segment.value / this._maxValue;
    return value > 0.75;
  }

  isHighLevel(segment: Segment): boolean {
    const value = segment.value / this._maxValue;
    return value > 0.5 && value <= 0.75;
  }

  isMediumLevel(segment: Segment): boolean {
    const value = segment.value / this._maxValue;
    return value > 0.25 && value <= 0.5;
  }

  isLowLevel(segment: Segment): boolean {
    const value = segment.value / this._maxValue;
    return value <= 0.25;
  }

  getPoint(radius: number, angle: number): Point {
    const x = Math.sin(angle) * radius;
    const y = -Math.cos(angle) * radius;
    return { x, y };
  }

  getPath(segment: Segment, part: SegmentPart): string {
    const radius = (segment.radius * part.importance) / 4;
    const firstPoint = this.getPoint(radius, segment.startAngle);
    const secondPoint = this.getPoint(radius, segment.endAngle);
    return `M 0 0 L ${firstPoint.x} ${firstPoint.y} L ${secondPoint.x} ${secondPoint.y} Z`;
  }

  getValuePath(segment: Segment): string {
    const radius = (segment.radius * segment.value) / this._maxValue;
    const firstPoint = this.getPoint(radius, segment.startAngle);
    const secondPoint = this.getPoint(radius, segment.endAngle);
    return `M 0 0 L ${firstPoint.x} ${firstPoint.y} L ${secondPoint.x} ${secondPoint.y} Z`;
  }

  getDescriptionPath(): string {
    var path = this.segments
      .slice(0, this.segments.length - 1)
      .map((segment) => this.getPoint(segment.radius, segment.startAngle))
      .map((point) => `L ${point.x} ${point.y}`)
      .join(' ');
    return `M ${path.substring(1)} Z`;
  }

  getCirclePoint(segment: Segment): Point {
    const angle = (segment.startAngle + segment.endAngle) / 2;
    const point = this.getPoint(segment.radius * 1.25, angle);
    return point;
  }

  showDetails(segment: Segment): void {
    segment.isSelected.set(true);
    this.title.set(segment.text);
    this.value.set(`${segment.value} von ${this._sumValue}`);
    this.percentage.set(
      `${((segment.value / this._sumValue) * 100).toFixed(0)}%`
    );
  }

  hideDetails(): void {
    this.segments.forEach((segment) => {
      segment.isSelected.set(false);
    });
  }
}
