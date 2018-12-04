import NavLayout from '../components/NavLayout.js'
import Link from 'next/link'
import {withRouter} from 'next/router'
import NavBar from '../components/navbar.js'

// const PostLink = (props) => (
//   <li>
//     <Link href={`/page?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

const Index = () => (
  <div>
    <NavLayout>
      <p>this is the home page navbar</p>
    </NavLayout>

      <p>Hello Next.js</p>

        <Link href= '/tips'>
          <button>Tasting Tips</button>
        </Link>
      <br/>
        <Link href= '/kinds'>
          <button>Kinds of Whiskey</button>
        </Link>
      <br/>
        <Link href= '/him'>
          <button>How It's Made</button>
        </Link>
      <br/>
        <Link href= '/history'>
          <button>History</button>
        </Link>
    
  </div>
)

export default Index