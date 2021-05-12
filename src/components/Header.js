import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
          
            <div className="home-link">
                <Link to="/">
                    <h1>Home</h1>
                </Link>
            </div>
            
                <div>
                <Link to="/about">
                    <p>about</p>
                </Link>
                </div>
                <div>
                <Link to="/portfolio">
                    <p>portfolio</p>
                </Link>
                </div>
                <div>
                <Link to="/blog">
                    <p>blog</p>
                </Link>
                
            </div>
        </div>
    )
}

export default Header; 