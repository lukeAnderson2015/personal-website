/**
 *
 * Asynchronously loads the component for CircularImg
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
