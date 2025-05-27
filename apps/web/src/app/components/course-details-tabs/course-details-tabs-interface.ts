/* eslint-disable @typescript-eslint/naming-convention */

export type ICourseTabs = 'Programme' | 'Description' | 'Instructeur' | 'Avis';
export interface ICourseDetailsTabsState {
    aciveTab: ICourseTabs;
}
