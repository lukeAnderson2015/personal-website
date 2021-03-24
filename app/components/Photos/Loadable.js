/**
 *
 * Asynchronously loads the component for Photos
 *
 */
import React from 'react';
import loadable from 'utils/loadable';

export default loadable(() => import('./index'), {
  fallback: <div>Loading...</div>,
});
