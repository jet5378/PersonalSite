import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="nav-container">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/links">Links</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar