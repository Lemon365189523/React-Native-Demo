
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
                isLoading:action.isLoading,
            }
            break;

        case types.kHomeLayoutReceived:
            return {
                ...state,
                layout: action.layout,
                isLoading: false,
            }


        default:
            return state;

    }

};

export default homeReducer;