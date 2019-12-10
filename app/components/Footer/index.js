import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section style={{marginRight: "30px", display: 'flex', flexDirection: 'column'}}>
        <FormattedMessage {...messages.licenseMessage} />
        <a href='https://icons8.com'>Icons By Icons8</a>
      </section>
      <section>
        <FormattedMessage {...messages.authorMessage} />
      </section>
    </Wrapper>
  );
}

export default Footer;
