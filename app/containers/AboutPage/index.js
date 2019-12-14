/*
 * About Page
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Section from '../HomePage/Section';
import H2 from 'components/H2';
import messages from './messages';

export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About Lukas Anderson</title>
        <meta
          name="description"
          content="Lorem Ipsum"
        />
      </Helmet>
        
      <Section style={{ display: 'block', height: 'auto', width: '70%', marginTop: '90px', marginRight: '15%', marginLeft: '15%'}}>
        <H2 style={{textAlign: 'center', marginBottom: 0}}>
            <FormattedMessage {...messages.introHeader} />
        </H2>
        <p>
          <FormattedMessage {...messages.introMessage} />
        </p>
        <div style={{width: '100%', borderBottom: 'solid 1px grey', marginTop: '25px'}} />
        <H2 style={{textAlign: 'center', marginBottom: 0}}>
            <FormattedMessage {...messages.goalHeader} />
        </H2>
        <p>
          <FormattedMessage {...messages.goalMessage} />
        </p>
        <div style={{width: '100%', borderBottom: 'solid 1px grey', marginTop: '25px'}} />
        <H2 style={{textAlign: 'center'}}>
            <FormattedMessage {...messages.careerHeader} />
        </H2>
          <p>
            <FormattedMessage {...messages.careerMessage} />
          </p>
          <p>
            <FormattedMessage {...messages.careerMessageTwo} />
          </p>
      </Section>
    </div>
  );
}
