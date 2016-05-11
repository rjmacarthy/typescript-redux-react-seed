import * as ActionTypes from '../constants/ActionTypes';
import * as superagent from 'superagent';

module Actions {

	class ActionsCreators {
		public static get(data: any): any {
			return {
				type: ActionTypes.ACTION,
				data: data
			};
		};

	}


	export const fetch = (): any => {
		return (dispatch: Redux.Dispatch) => {
			dispatch(ActionsCreators.get({}));
		};
	};
}

export default Actions;