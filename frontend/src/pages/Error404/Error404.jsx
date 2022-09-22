import { Link } from 'react-router-dom';
import ErrorImage from '../../components/ErrorImage/ErrorImage';
import './Error404.scss';

const Error404 = () => (
  <div className="error">
    <div className="error__container flex items-center">
      <div className="error__image w-col-50 flex items-center">
        <ErrorImage />
      </div>
      <div className="error__info">
        <div className="error__title">Oups...</div>
        <div className="error__text">La page que vous recherchez semble introuvable.</div>
        <div className="error__code">Code d'erreur : 404</div>
        <div className="error__link">
          <Link to="/locations/" className="link">
            Explorez une nouvelle destination!
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Error404;
