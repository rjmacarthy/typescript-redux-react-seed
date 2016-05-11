declare var window: any;
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import Index from './components/Index';
import About from './components/About';
import { Provider } from 'react-redux';
import { Router, Route, History, IndexRoute, browserHistory  } from 'react-router';
import * as history  from 'history';
import storeConfig from './store';

const store: Redux.Store = storeConfig;

ReactDOM.render(
	<Provider store={store}>
		<Router history={ browserHistory }>
			<Route path="/" component={App}>
				<IndexRoute component={Index} />
				<Route path="index" component={Index}/>
				<Route path="About" component={About}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);