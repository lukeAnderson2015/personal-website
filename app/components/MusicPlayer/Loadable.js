/**
 *
 * Asynchronously loads the component for MusicPlayer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
