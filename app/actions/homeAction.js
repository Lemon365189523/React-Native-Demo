
import Util from '../common/utils';
//*作用 把被加载模块整体引入的意思
import * as urls from '../common/constants_url';
import * as types from './types';

export let homelayout = (isLoading,isRefreshing) => {
    let url = urls.kUrlHomeList;
    console.log(url);
    return dispatch => {
        dispatch({
            type:types.kHomeLayout,
            isLoading:isLoading,
            isRefreshing: isRefreshing,
        });
        return Util.post(url,{}, (status, code, message, data, share) => {
            //请求成功 通过dispatch来通知reducer改变状态
            console.log('homelayout->请求成功')
            if (isRefreshing){
                testData.push(testItem);
            }
            dispatch({type:types.kHomeLayoutReceived,layout:testData});
        },(error)=>{
            //请求失败
            console.log('homelayout->'+error);
            dispatch({type: types.kActionError, isLoading:false});
        })
    }

}

const testItem = {
    cellId:'line',
    cellWidth:750,
    cellHeight: 100,
    backgroundColor: 'blue'
}

const testData = [
    {
        cellId:'scrollCell',
        cellWidth: 750,
        cellHeight: 350,
        backgroundColor: '#ffff',
        cellData:{
            images:[
                "http://tstimage.360kad.com/group1/M00/10/AD/wKgBEFgcTAyAA33IAALCRUInkLU403.png",
                "http://tstimage.360kad.com/group1/M00/10/AD/wKgBEFgcTAyAA33IAALCRUInkLU403.png"
            ]
        }
    },
    {
        cellId:'itemsCell',
        cellWidth: 750,
        cellHeight: 0,
        backgroundColor: '#565656',
        cellData:{
            column: 4,
            items:[
                {icon:"",title:"1"},
                {icon:"",title:"2"},
                {icon:"",title:"3"},
                {icon:"",title:"4"},
                {icon:"",title:"5"},
                {icon:"",title:"6"},
                {icon:"",title:"7"},
                {icon:"",title:"8"},
            ]
        }
    },
    {
        cellId:'scrollTextCell',
        cellWidth: 750,
        cellHeight: 0,
        cellData: {
            text: "公告通知：的角度看大姐夫克拉的进口量福利局啊点击加大是大非"
        }
    },
    {
        cellId:'line',
        cellWidth:750,
        cellHeight: 10,
        backgroundColor: '#909090'
    }
]