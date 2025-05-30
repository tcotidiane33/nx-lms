import { useState, useId } from 'react';
import type { ReactElement } from 'react';
import { Button } from '@components/button/button';
import { CourseCurriculum } from '@components/course-curriculum/course-curriculum';
import { CourseDescription } from '@components/course-description/course-description';
import { CourseInstructor } from '@components/course-instructor/course-instructor';
import { CourseComments } from '@components/course-comments/course-comments';
import { courseDetailsTabsHelper } from './course-details-tabs-helper';
import type { ICourseDetailsTabsState, ICourseTabs } from './course-details-tabs-interface';
import './course-details-tabs.css';

const TABS: ICourseTabs[] = ['Programme', 'Description', 'Instructeur', 'Avis'];

export function CourseDetailsTabs():ReactElement {
  const [state, setState] = useState<ICourseDetailsTabsState>({
    aciveTab: 'Programme',
  });

  const { aciveTab } = state;
  const helper = courseDetailsTabsHelper(state, setState);

  return (
    <>
      <div className="course-details-tab-container">
        {
        TABS.map((tab: ICourseTabs) => (
          <Button
            key={useId()}
            text={tab}
            backgroundColor={tab === aciveTab ? 'main' : 'white'}
            textColor={tab === aciveTab ? 'white' : 'default'}
            onClick={() => helper.setActiveTab(tab)}
            isDisabled={tab === aciveTab}
          />
        ))
    }
      </div>
      <div className="course-details-tab-content">
        {(() => {
          switch (aciveTab) {
            case 'Programme':
              return <CourseCurriculum />;
            case 'Description':
              return <CourseDescription />;
            case 'Instructeur':
              return <CourseInstructor />;
            case 'Avis':
              return <CourseComments />;
            default:
              return <CourseCurriculum />;
          }
        })()}
      </div>
    </>
  );
}
