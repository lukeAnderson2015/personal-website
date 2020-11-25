/**
 *
 * Asynchronously loads the component for Slide
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
