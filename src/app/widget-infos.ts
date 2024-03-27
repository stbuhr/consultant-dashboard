export type ProgramWidgetType =
  | 'Unknown'
  | 'CurrentTeamStatus'
  | 'TeamCompetenceProfile'
  | 'TeamCompetenceAtlas'
  | 'TeamTeamrole';

export interface ProgramWidgetInfo {
  title: string;
  type: ProgramWidgetType;
  url: string;
}

export const defaultProgramWidgetInfo: ProgramWidgetInfo = {
  title: 'Wird geladen ...',
  type: 'Unknown',
  url: '#',
};
