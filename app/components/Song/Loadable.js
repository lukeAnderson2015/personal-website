/**
 *
 * Asynchronously loads the component for Song
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
