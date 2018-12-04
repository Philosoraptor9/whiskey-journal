import NavBar from './navbar';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid  #DDD'
}

const NavLayout = (props) => (
    <div style={layoutStyle}>
        <NavBar />
            {props.children}
   </div>
)

export default NavLayout;