import { Link } from 'react-router-dom'
import { Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
// import Auth from '../../utils/auth'
import './Navbar.scss'

export default function Navbar() {
    return (
        <>
        {/* {Auth.loggedIn() ? ( */}
            {/* <div className="navigation">
                <nav className="navbar">
                    <Link to='/'>Menu</Link>
                    <Link to='/cart'>
                        <ShoppingCartOutlined style={{ fontSize: '2.1em' }} />
                        <Badge
                            count={0}
                            // count={cartData.cart.length} 
                            size="small"
                            showZero
                            color="red"
                            offset={[2, -20]}
                        />
                    </Link>
                    <Link to='/favorites'>My Favorites</Link>
                </nav>
            </div> 
           */}
            <div className="navigation">
                <nav className="navbar">
                    <Link to='/'>Menu</Link>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Log In</Link>
                </nav>
            </div>
        </>
    )
}