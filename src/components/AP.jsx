import '../stylesheets/ap.scss';
import {Link} from "react-router-dom";

const AP = () => {
    return(
        <div id={'ap'}>
            <Link to={'/advanced-programming/session1'}
                  className={'main-link ap-links'}
            >
                1st session
            </Link>
        </div>
    )
}

export default AP;
