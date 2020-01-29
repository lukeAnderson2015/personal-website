import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section style={{marginRight: "30px", display: 'flex', flexDirection: 'column'}}>
        <FormattedMessage {...messages.licenseMessage} />
        <a href='https://icons8.com' target="_blank">Icons By Icons8</a>
      </section>
      <section>
        <FormattedMessage {...messages.authorMessage} /> <br/>
        <FormattedMessage {...messages.creditMessage} /> <a href="https://github.com/react-boilerplate/react-boilerplate" target="_blank">boilerplate project.</a>
      </section>
    </Wrapper>
  );
}

export default Footer;
