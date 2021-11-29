import axios from 'axios'
import NProgress from "nprogress";


NProgress.start();

export const request = axios.create({
    baseURL:'http://localhost:9000/' ,
    timeout: 6000
})
NProgress.done();

export default request
