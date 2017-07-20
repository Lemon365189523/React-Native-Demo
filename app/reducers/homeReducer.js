
import * as types from '../actions/types';

const initialState = {
    banners: [],
    articles: [],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false,
    layout: [],
    refreshing: false
}

let homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.kHomeLayout:
            return {
                ...state,
                //如果是刷新的话就没有加载
                isLoading:action.isRefreshing? false : action.isLoading,
                refreshing: action.isRefreshing
            }
            break;

        case types.kHomeLayoutReceived:
            return {
                ...state,
                layout: action.layout,
                isLoading: false,
                refreshing: false,
            }
            break;

        default:
            return state;

    }

};

export default homeReducer;