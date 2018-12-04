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
          <a>Tasting Tips</a>
        </Link>
      <br/>
        <Link href= '/kinds'>
          <a>Kinds of Whiskey</a>
        </Link>
      <br/>
        <Link href= '/him'>
          <a>How It's Made</a>
        </Link>
      <br/>
        <Link href= '/history'>
          <a>History</a>
        </Link>
    
  </div>
)

// const NavButtons = () => ()

export default Index