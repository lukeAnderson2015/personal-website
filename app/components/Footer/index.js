import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';
import Img from 'components/Img';
import reactIcon from '../../images/icons8-react-native-64.png';

function Footer() {
  return (
    <Wrapper>
      <section style={{marginRight: "30px", display: 'flex', flexDirection: 'column'}}>
        <FormattedMessage {...messages.licenseMessage} />
        <a href='https://icons8.com' target="_blank">Icons By Icons8</a>
      </section>
      <section>
        <span>Built with love using </span>
        <a href='https://reactjs.org' target="_blank">
          React.js
          <Img src={reactIcon} alt="icon-unavilable"/>
        </a>
      </section>
      <section>
        <FormattedMessage {...messages.authorMessage} /> <br/>
        <FormattedMessage {...messages.creditMessage} /> <a href="https://github.com/react-boilerplate/react-boilerplate" target="_blank">React.js boilerplate project.</a>
      </section>
    </Wrapper>
  );
}

export default Footer;
