// import { useContext } from 'react'
// import { CartContext } from 'src/context/CartContext'
import { Link } from 'react-router-dom'
import { Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import './Navbar.scss'

export default function Navbar(){
    // const cartData = useContext(CartContext)
    return(
        <div className="navigation">
            <nav className="navbar">
                <Link to='/'>Menu</Link>
                <Link to='/cart'>
                    <ShoppingCartOutlined style={{ fontSize: '2.1em' }}/>
                    <Badge 
                        count={0} 
                        // count={cartData.cart.length} 
                        size="small"
                        showZero 
                        color="red"
                        offset={[2,-20]}
                    />
                </Link>
            </nav>
        </div>
    )
}