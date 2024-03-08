export type ProgramWidgetType =
  | 'Unknown'
  | 'TeamCompetenceProfile'
  | 'TeamCompetenceAtlas'
  | 'TeamTeamrole';

export interface ProgramWidgetInfo {
  title: string;
  type: ProgramWidgetType;
}

export const defaultProgramWidgetInfo: ProgramWidgetInfo = {
  title: 'Wird geladen ...',
  type: 'Unknown',
};
