import './App.scss';
import Logo from './assets/images/img.png'
import {Link} from "react-router-dom";

function App() {
  return (
      <div id={'main-app'}>
          <p id={'main-title'}>
              Android at SBU by CS students
          </p>
          <div id={'main-content'}>
              <img src={Logo} alt={''} id={'logo'}/>
              <Link to={'/advanced-programming'} className={'main-link'}>
                  <p>
                      Advanced Programming
                  </p>
              </Link>
          </div>
          <a href={'https://github.com/SBU-CS-Android'}>
              <img src={'https://www.vectorlogo.zone/logos/github/github-ar21.svg'} alt={'github'}/>
          </a>
      </div>
  );
}

export default App;
