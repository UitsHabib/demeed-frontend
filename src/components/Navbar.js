import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to = '/'>Welcome</Link>
            <Link to = '/sellersignup'>SellerSignUp</Link>
        </nav>
    )
    
}

export default Navbar