/*
 * HomePage Messages
 *
 * This contains all the text for the TravelPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.TravelsPage';

export const travelIntroStatement = 'Travel has been a part of my life as long as I can remember. I was fortunate enough to have parents who gave me experiences, not things. It was always my dream that once I was an adult (had enough money, career experience and confidence) I would "drop it all" and see the world. I was lucky enough to have my wife with me on my adventures.';
export const travelIntroPartTwo = "It all began when we'd decided we'd had enough of the Denver winters, and booked a trip to Belize for 12 days. The original plan was to return and continue working for at least another year. However, upon returning we realized that we had to go. We're not sure what caused the sensation, but it was urgent. We cancelled our apartment lease, sold as much as we could, and drove all our stuff to our parent's houses. We then started exploring where we wanted to go. The world was our oyster. We decided Ecuador and Peru sounded great. I'm not sure why, honestly. So after a few months with the family, putting in our dues, we departed. The following are journal entries from our travels throughout South & Central America, The USA and Southeast Asia. We even pulled the trigger on our marriage during this period and incorporated our honeymoon into this adventure.";

export default defineMessages({
  travelsHeader: {
    id: `${scope}.travels.header`,
    defaultMessage: 'Travels',
  },
  travelsSubHeader: {
    id: `${scope}.travels.subHeader`,
    defaultMessage:
      'A journal catalogue of my adventures.',
  }
});
