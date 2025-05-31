import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { CoursesItem } from '../courses-item/courses-item';
import { ICourseItemProperties } from '../courses-item/courses-item-interface';
import { coursesSectionHelper } from './courses-section-helper';
import type { ICoursesSectionProperties, ICoursesSectionState } from './courses-section-interface';
import { useHorizontalScroll } from '../../lib/hooks/carrousel';

export function CoursesSection({ coursesCategory = 'all' }: ICoursesSectionProperties): ReactElement {
  const [state, setState] = useState<ICoursesSectionState>({
    courses: [],
  });

  const { courses } = state;
  const helper = coursesSectionHelper(state, setState, coursesCategory);

  useEffect((): void => {
    helper.filterCourse();
  }, [coursesCategory]);

  const { containerRef, scrollLeft, scrollRight } = useHorizontalScroll();

  const renderCourseItem = (course: ICourseItemProperties, index: number): ReactElement => (
    <div
      key={`${course.id}-${index}`}
      className="flex-shrink-0 w-full sm:w-80 md:w-72 lg:w-64 xl:w-72 snap-start"
    >
      <CoursesItem {...course} />
    </div>
  );

  return (
    <div className="px-4 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {coursesCategory === 'all' ? 'Tous nos cours' : `Cours ${coursesCategory}`}
        </h2>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex pb-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          >
            {[...courses, ...courses].map(renderCourseItem)}
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 hover:bg-gray-200"
            onClick={scrollLeft}
          >
            {/* Icône flèche gauche */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>


          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 hover:bg-gray-500"
            onClick={scrollRight}
          >
            {/* Icône flèche droite */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>


          </button>
        </div>
      </div>
    </div>
  );
}
