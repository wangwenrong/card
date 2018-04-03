import { Alert } from 'react-native';
// import { Toast } from 'antd-mobile';
import axios from 'axios';

const BASEURL = 'http://gis.cloud.rtzltech.cn:8010/monitoringserver/';

function getData(url, params, callback, errorCallBack) {
    let instance = axios.create({
        timeout: 30000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    instance.post(BASEURL + url, params).then(({ data }) => {
        console.log('数据', data);
        if(data && '99' == data.retcode) {
            Alert.alert(data.retmsg);
            return;
        }
        if(data && '-1'==data.retcode){
            Alert.alert(data.retmsg);
            return;
        }
        callback(data);
    }).catch((error)=> {
        console.log(error.response);
        if (errorCallBack) {
            if (error.message == 'Network Error') {
                Toast.info('网络错误');
            } else {
                Toast.info(error.message);
            }
            errorCallBack(error);
        }
    });
}
export function login(params, callback, errorCallBack) {
    getData('login', params, callback, errorCallBack);
}
export function getdevicelist(params, callback) {
    getData('track/devListPage.action', params, callback);
}
export function getfencelist(params, callback) {
    getData('fence/list.action', params, callback);
}
export function getfeedback(params, callback) {
    getData('feedback/submitFeedback.action', params, callback);
}