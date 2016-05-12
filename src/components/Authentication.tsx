'use strict';

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions/actions';
import { browserHistory  } from 'react-router';

export default function authenticate(Component: any) {
	class Authentication extends React.Component<any, any> {
		componentDidMount() {
			this.checkAndRedirect();
		}

		componentDidUpdate() {
			this.checkAndRedirect();
		}

		checkAndRedirect() {
			if (!this.props.user) {
				browserHistory.push('/login');
			}
		}

		render(): JSX.Element {
			return (
				<section className= 'container' >
					{ true ? <Component {...this.props} /> : null }
				</section>
			);
		};
	}
	const mapStateToProps = state => ({
		reducer: state.reducer
	});

	const mapDispatchToProps = dispatch => ({
		actions: bindActionCreators(Actions, dispatch)
	});

	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(Authentication);

}

