import NavLayout from '../components/NavLayout.js'
import Link from 'next/link'
import NavBar from '../components/navbar.js'

const PageLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/pages?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <div>
    <NavLayout>
      <p>this is the home page navbar</p>
    </NavLayout>
      <p>Hello Next.js</p>
      <ul>
        <PageLink id="him" title="How It's Made"/>
        <PageLink id="tasting-tips" title="Tasting Tips"/>
        <PageLink id="kow" title="Kinds of Whisky"/>
        <PageLink id="history-of-whisky" title="History of Whisky"/>
      </ul>
  </div>
)

// const NavButtons = () => ()


 


export default Index