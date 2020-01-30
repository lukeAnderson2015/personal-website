/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  firstPanelHeader: {
    id: `${scope}.writings.header`,
    defaultMessage: 'Lukas Anderson',
  },
  firstPanelSubHeader: {
    id: `${scope}.writings.subHeader`,
    defaultMessage:
      'Explorer. Creator. Developer.',
  }
});
