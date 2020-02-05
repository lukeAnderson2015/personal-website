/**
 *
 * Asynchronously loads the component for ArticleViewer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
