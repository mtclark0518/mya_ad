import ReactDOM from 'react-dom';
import './_styles/index.css';
import '../node_modules/semantic-ui-css/semantic.min.css';

// import registerServiceWorker from './registerServiceWorker';

import { makeMainRoutes } from './_config/routes';
const routes = makeMainRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
);