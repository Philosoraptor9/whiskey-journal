
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';

import Button from '@material-ui/core/Button';

import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';
import NavLayout from '../components/NavLayout.js';
import notify from '../lib/notifier';


class Index extends React.Component {
    static propTypes = {
      user: PropTypes.shape({
        displayName: PropTypes.string,
        email: PropTypes.string.isRequired,
      })
    };

    static defaultProps = {
      user: null,
    };

    render() {
      const { user } = this.props;
      return (
        <div>
        <NavLayout>
          <p>Dashboard</p>
          <p>Email: {user.email}</p>
        </NavLayout>

        <Button variant="contained" onClick={() => notify('success message')} >
          Click me to test notify()
        </Button>

          <h3 style={{textAlign: 'center' }}>Mmm Whiskey</h3>
            <Link href= '/tips'>
              <Button style={{ width: '100px', margin: '0px auto', display: 'block'}} variant="contained">Tasting Tips</Button>
            </Link>
          <br/>
            <Link href= '/kinds'>
              <Button style={{ width: '100px', margin: '0px auto', display: 'block'}} variant="contained">Kinds of Whiskey</Button>
            </Link>
          <br/>
            <Link href= '/him'>
              <Button style={{ width: '100px', margin: '0px auto', display: 'block'}} variant="contained">How It's Made</Button>
            </Link>
          <br/>
            <Link href= '/history'>
              <Button style={{ width: '100px', margin: '0px auto', display: 'block'}} variant="contained">History</Button>
            </Link>    
      </div>
      )
    }
}


export default withAuth(withLayout(Index));