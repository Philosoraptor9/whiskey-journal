import Layout from '../components/layout.js'
import Link from 'next/link'
import NavBar from '../components/navbar.js'

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

// const NavButtons = () => ()

export default () => (
  <Layout>
      <p>this is the home page</p>
  </Layout>
)

export default Index