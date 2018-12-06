import Link from 'next/link';
import Head from 'next/head';
import NavLayout from '../components/NavLayout.js';
import NavBar from '../components/navbar.js';
import withLayout from '../lib/withLayout';
import Button from '@material-ui/core/Button';


const Index = () => (
  <div>
    <NavLayout>
      <p>this is the home page navbar</p>
    </NavLayout>

      <h3>Mmm Whisky</h3>

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
)

export default withLayout(Index);