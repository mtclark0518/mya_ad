import ReactDOM from 'react-dom';
import './index.css';
import './semantic-ui-css/semantic.min.css';

// import registerServiceWorker from './registerServiceWorker';

import { makeMainRoutes } from './_config/routes';
const routes = makeMainRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
);