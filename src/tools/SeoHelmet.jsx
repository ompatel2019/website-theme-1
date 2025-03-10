import React from 'react';
import { Helmet } from 'react-helmet';

const SeoHelmet = ({ title, description, canonicalUrl, jsonSchema }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    {jsonSchema && (
      <script type="application/ld+json">{JSON.stringify(jsonSchema)}</script>
    )}
    <meta name="robots" content="index, follow" />
  </Helmet>
);

export default SeoHelmet;
