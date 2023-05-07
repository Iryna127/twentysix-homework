import { Link } from 'react-router-dom';
import '../css/navigation.css';

const Navigation = () => (
  <nav className="link__block">
    <Link className="link" to="/">
      Home
    </Link>
    <Link className="link" to="/character">
      Heroes Page
    </Link>
    <Link className="link" to="/episodes">
      Episodes Page
    </Link>
  </nav>
);

export default Navigation;
