'use strict';

import * as React from 'react';
import { autobind } from 'core-decorators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions/actions';

interface AboutProps {
	actions: any;
};

class About extends React.Component<AboutProps, void> {
	public Actions : any = this.props.actions;

	render() : JSX.Element {
		return (
			<section className= 'container' >
				<h1>This is the about page</h1>
			</section >
		);
	};
}

const mapStateToProps = state => ({
	reducer: state.reducer
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(About);
