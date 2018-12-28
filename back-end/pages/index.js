import Link from 'next/link';
import Head from 'next/head';
import NavLayout from '../components/NavLayout.js';
import withLayout from '../lib/withLayout';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const Index = ({ user }) => (
  <div>
    <NavLayout>
      <p>this is the home page navbar</p>
    </NavLayout>

      <h3>Mmm Whiskey</h3>
      <p>Email: {user.email}</p>

        <Link href= '/tips'>
          <Button variant="contained">Tasting Tips</Button>
        </Link>

      <br/>

        <Link href= '/kinds'>
          <Button variant="contained">Kinds of Whiskey</Button>
        </Link>

      <br/>

        <Link href= '/him'>
          <Button variant="contained">How It's Made</Button>
        </Link>

      <br/>

        <Link href= '/history'>
          <Button variant="contained">History</Button>
        </Link>
    
  </div>
);

Index.getInitialProps = async ({ query }) => ({ user: query.user });

Index.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
};

console.log(Index.proptypes)

Index.defaultProps = {
  user: null,
};

export default withLayout(Index);