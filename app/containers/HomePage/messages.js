/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  writingsHeader: {
    id: `${scope}.writings.header`,
    defaultMessage: 'Assorted Writings',
  },
  writingsSubHeader: {
    id: `${scope}.writings.subHeader`,
    defaultMessage:
      'An assortment of thoughts, reflections and the occaisional rant.',
  }
});
