/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: 'Design, implementation, photography and writing by Luke Anderson. Credit to Max Stoiber for the starter boilerplate project.'
  },
});
