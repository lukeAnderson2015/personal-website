/*
 * Travel Page
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';
import Section from '../HomePage/Section';
import TravelImg from './TravelImg';
import messages, {travelIntroStatement, travelIntroPartTwo} from './messages';
import {locations} from './locations';

export default function TravelPage() {

  function buildImageScroller(images) {
    return images.map(i => {
      <div style={{flex: '0 0 auto'}}>
        TESTTEST
        <TravelImg src={i.src} alt="img-not-found"/>
        <p>{i.caption}</p>
      </div>
    })
  }

  function buildJournalEntries (entries) {
      return entries.map(e => {
          <div key={e.date}>
            <h5>{e.date}</h5>
            <p>{e.text}</p>
          </div>
      });
  };

  const travelLocations = locations.map (l => {
    return(
      <div key={l.title}>
        <h3>
          {l.title}
        </h3>
        <p>{l.summary}</p>
        <p>{l.images[0].src}</p>
        <TravelImg src={l.images[0].src} alt="img-not-found"/>

        <div style={{display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', height: '500px', width: '500px'}}>
          {buildImageScroller(l.images)}
        </div>
        <p>
          {buildJournalEntries(l.journalEntries)}
        </p>
      </div>
    );
  })
  
  return (
    <div>
      <Helmet>
        <title>Travels</title>
        <meta
          name="description"
          content="Lorem Ipsum"
        />
      </Helmet>

      {/* <Img src={seattle_ferry} alt="no-img-available" />    */}
      
      <Section style={{marginTop: '90px'}}>
        <H2 style={{textAlign: 'center'}}>
          <FormattedMessage {...messages.travelsHeader} />
        </H2>
        <p style={{textAlign: 'center'}}>
          <FormattedMessage {...messages.travelsSubHeader} />
        </p>

        <p style={{ display: 'block', height: 'auto', width: '70%', marginRight: '15%', marginLeft: '15%'}}>
          {travelIntroStatement}
            <br/><br/>
          {travelIntroPartTwo}
        </p>

        {travelLocations}
      </Section>
    </div>
  );
}
