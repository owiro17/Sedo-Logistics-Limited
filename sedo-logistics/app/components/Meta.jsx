import PropTypes from 'prop-types';
import React from 'react';
export default function Meta({
  title,
  description,
  keywords,
  author,
  openGraph,
}) {
  return (
    <>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta property="og:title" content={openGraph.title} />
      <meta property="og:description" content={openGraph.description} />
      <meta property="og:url" content={openGraph.url} />
      {openGraph.images.map((image, index) => (
        <meta key={index} property="og:image" content={image.url} />
      ))}
    </>
  );
}

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.string.isRequired,
  openGraph: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
