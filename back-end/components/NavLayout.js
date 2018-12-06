import NavBar from './navbar';

const navLayout = {
    margin: 20,
    padding: 20,
    border: '1px solid  #DDD'
}

const NavLayout = (props) => (
    <div style={navLayout}>
        <NavBar />
            {props.children}
   </div>
)

export default NavLayout;