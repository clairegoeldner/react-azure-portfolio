import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="show">
      <header id="top">
        <Link to="index"><h1>Claire Goeldner</h1></Link>
        <nav className = "horizontalNavigation">
          <ul>
            <li><Link to="/" title="My Portfolio Page">Home</Link></li>
            <li><Link to="/resume" title="My Resume">Resume</Link></li>
            <li><Link to="/projects" title="My Projects">Projects</Link></li>
            <li><Link to="/contact" title="Contact Me">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="flex">
        <Outlet />
      </div>

      <footer>
          <a href="mailto:clairegoeldner@gmail.com">ClaireGoeldner@gmail.com</a>
          <a href="tel:+15079615576">(507) - 961 - 5576</a>
          <address>W2007 Windsong Terrace Alma, WI 54610</address>
      </footer>
    </div>
  );
}

export default App;
