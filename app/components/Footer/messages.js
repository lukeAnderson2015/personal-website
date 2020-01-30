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
    defaultMessage:
      'Site Design, Implementation, Most* Photography, Music and Writing by Lukas Anderson.',
  },
  creditMessage: {
    id: `${scope}.credit.message`,
    defaultMessage:
      'Credit to Max Stoiber for the ',
  },
});
