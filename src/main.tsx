declare var window: any;
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import About from './components/About';
import App from './containers/App';
import authenticate from './components/Authentication';
import Index from './components/Index';
import Login from './components/Login';
import storeConfig from './store';

const store: Redux.Store = storeConfig;

ReactDOM.render(
	<Provider store={store}>
		<Router history={ browserHistory }>
			<Route path="/" component={App}>
				<IndexRoute component={authenticate(Index)} />
				<Route path="index" component={authenticate(Index)}/>
				<Route path="about" component={About}/>
				<Route path="login" component={Login}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);