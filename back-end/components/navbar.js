import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const NavBar = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/post">
          <a style={linkStyle}>New Whiskey</a>
        </Link>
        <Link href="/#">
          <a style={linkStyle}>My Journal</a>
        </Link>
        <Link href="/#">
          <a style={linkStyle}>Logout</a>
        </Link>
    </div>
)

export default NavBar