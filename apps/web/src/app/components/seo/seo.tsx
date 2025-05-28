import type { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import type { ISEOProperties } from './seo-interface';

export function SEO({
  pageTitle,
  keywords = [],
  language = 'fr-FR',
  description,
}: ISEOProperties):ReactElement {
  return (
    <Helmet
      title={pageTitle}
      htmlAttributes={{ lang: language }}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords.join(','),
        },
      ]}
    />
  );
}
