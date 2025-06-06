import { useEffect, useState, Suspense } from 'react';
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { Language } from '@globals/enum';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { CoursesSection } from '@components/courses-section/courses-section';
import { CoursesSectionHeadline } from '@components/courses-section-headline/courses-section-headline';
import CoursesData from '@data/courses.json';
import { Button } from '@components/button/button';
import { Paginate } from '@components/paginate/paginate';
import { Spinner } from '@components/spinner/spinner';
import type { ICoursesState } from './courses-interface';
import { coursesHelper } from './courses-helper';
import './courses.css';

export function Courses():ReactElement {
  const [state, setState] = useState<ICoursesState>({
    categories: [],
    aciveTab: '',
  });

  const { categories, aciveTab } = state;
  const helper = coursesHelper(CoursesData, state, setState);

  useEffect(():void => {
    helper.findUniqueCategories();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <SEO
        pageTitle="Cours"
        description="Apprentissage facile avec le site éducatif ..."
        keywords={['site éducatif', 'apprentissage en ligne']}
        language={Language.FR_FR}
      />
      {/* <BreadcrumbComponent /> */}
      <section className="course-section section-padding">
        <div className="container">
          <CoursesSectionHeadline
            title="Nos cours"
            subTitle="Trouvez le cours qui vous convient"
          />
          <div className="row">
            <div className="col-12">
              <div className="category__container">
                {
                  categories.map((category: string) => (
                    <Button
                      key={category}
                      text={category}
                      backgroundColor={category === aciveTab ? 'main' : 'white'}
                      textColor={category === aciveTab ? 'white' : 'default'}
                      onClick={() => helper.setActiveTab(category)}
                      isDisabled={category === aciveTab}
                    />
                  ))
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <CoursesSection coursesCategory={aciveTab} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <Paginate />
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
