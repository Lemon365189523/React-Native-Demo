
import Util from '../common/utils';
//*作用 把被加载模块整体引入的意思
import * as urls from '../common/constants_url';
import * as types from './types';

export let homelayout = (isLoading) => {
    let url = urls.kUrlHomeList;
    console.log(url);
    return dispatch => {
        dispatch({type:types.kHomeLayout});
        return Util.post(url,{}, (status, code, message, data, share) => {
            //请求成功 通过dispatch来通知reducer改变状态
            dispatch({type:types.kHomeLayout,layout:["test"]});
            console.log('homelayout->请求成功')
        },(error)=>{
            //请求失败
            console.log('homelayout->'+error);
            dispatch({'type': types.kActionError});
        })
    }

}