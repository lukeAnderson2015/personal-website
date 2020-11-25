/**
 *
 * Asynchronously loads the component for Slider
 *
 */
import React from 'react';
import loadable from 'utils/loadable';

export default loadable(() => import('./index'), {
  fallback: <div>Loading...</div>,
});
