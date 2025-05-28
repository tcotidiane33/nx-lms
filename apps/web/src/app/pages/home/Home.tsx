import { Suspense } from 'react';
import type { ReactElement } from 'react';
import { SEO } from '../../components/seo/seo';
import { Language } from '@globals/enum';
import { HeroSection } from '../../components/hero-section/hero-section';
import { Facts } from '../../components/facts/facts';
import { CoursesSection } from '../../components/courses-section/courses-section';
import { Testimonials } from '../../components/testimonials/testimonials';
import { BecomeInstructor } from '../../components/become-instructor/become-instructor';
import { CoursesSectionHeadline } from '../../components/courses-section-headline/courses-section-headline';
import { ShowAllCourses } from '../../components/show-all-courses/show-all-courses';
// import { Spinner } from '@components/spinner/spinner';
import { Spinner } from '../../components/spinner/spinner';

export function Home(): ReactElement {
  return (
    <Suspense fallback={<Spinner />}>
       
          <SEO
            pageTitle="Page d'accueil"
            description="Apprentissage facile avec le site éducatif ..."
            keywords={['site éducatif', 'apprentissage en ligne']}
            language={Language.FR_FR}
          />
          <HeroSection />
          <Facts />
          <CoursesSectionHeadline
            title="Cours"
            subTitle="Trouvez le cours qui vous convient"
          />
          <CoursesSection coursesCategory="all" />
          <ShowAllCourses />
          <Testimonials />
          <BecomeInstructor />
        
    </Suspense>

  );
}
