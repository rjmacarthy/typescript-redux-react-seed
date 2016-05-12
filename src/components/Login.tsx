'use strict';

import * as React from 'react';

class Login extends React.Component<any, any> {
	public Actions : any = this.props.actions;

	render() : JSX.Element {
		return (
			<section className= 'container' >
				<h1>Not logged in!</h1>
			</section >
		);
	};
}

export default Login;
