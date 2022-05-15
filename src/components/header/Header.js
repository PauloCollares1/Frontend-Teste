// External imports
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { Link } from "react-router-dom";

// CSS
import './Header.css';





export const Header = () => {
  
  return (
    <div className="Header">
      <Link to='/' style={{ textDecoration: 'none' }}><span>Home</span></Link>
        <nav>
          <ul className="Header_list">
            <li>
              <SiGithub size={30}/>
            </li>
            <li>
              <SiLinkedin size={30} />
            </li>
          </ul>
        </nav>
    </div>
  )
}



