
import * as types from '../actions/types';

const initialState = {
    banners: [],
    articles: [],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false,
    layout: []
}

let homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.kHomeLayout:
            return {
                ...state,
                layout: action.layout
            }
            break;

        default:
            return state;

    }

};

export default homeReducer;