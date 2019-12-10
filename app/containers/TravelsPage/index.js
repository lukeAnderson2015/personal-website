/*
 * Travel Page
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import seattle_ferry from '../../Images/seattle_ferry.jpg';
import H2 from 'components/H2';
import Section from '../HomePage/Section';
import Img from 'components/Img';
import messages, {travelIntroStatement, travelIntroPartTwo} from './messages';
import {locations} from './locations';

export default function TravelPage() {

  function buildImageScroller(images) {
    return images.map(i => {
      <div style={{display: 'inline-block'}}>
        <Img src={i.src}/>
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
    return <li key={l.title}>
      <h3>
        {l.title}
      </h3>
      <div style={{overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap'}}>
        {buildImageScroller(l.images)}
      </div>
      <h4>{l.summary}</h4>
      <p>
        {buildJournalEntries(l.journalEntries)}
      </p>
    </li>;
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

        <ul>
          {travelLocations}
        </ul>
      </Section>
    </div>
  );
}
