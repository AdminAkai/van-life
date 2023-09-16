/**
 * Asynchronously loads the component for container
 */

import loadable from '../../utils/loadable'

export default loadable(() => import('./Vans'), {
  fallback: null,
})
