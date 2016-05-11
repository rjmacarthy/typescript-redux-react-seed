"use strict";

import { assign } from 'lodash';
import * as ActionTypes from '../constants/ActionTypes';

let initialState : any = {};

const reducer : Redux.Reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.ACTION:
			
		default:
			return state
	}
}

export default reducer;