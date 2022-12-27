import axios, { Axios, AxiosResponse, AxiosRequestConfig } from 'axios';
import router from '../router/index';
import {
	ElMessageBox,
} from 'element-plus'

// 处理  类型“AxiosResponse<any, any>”上不存在属性“errorinfo”。ts(2339) 脑壳疼！关键一步。
declare module "axios" {
	interface AxiosInstance{
		(config:AxiosRequestConfig):Promise<any>;
	}
}
// import {
// 	Message
// } from 'element-ui';
// 创建请求实例
const service = axios.create({
	//baseURL: 'http://jsonplaceholder.typicode.com',
	baseURL: import.meta.env.VITE_API_URL,
	// 指定请求超时的毫秒数
	timeout: 1000,
	// 表示跨域请求时是否需要使用凭证
	//withCredentials: false,
});

// 前置拦截器（发起请求之前的拦截）请求前拦截器
service.interceptors.request.use(
	(config:any) => {
		/**
		 * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
		 * const token = getToken()
		 * if (token) {
		 *  config.headers.token = token
		 * 
		 * }
		 */
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// 后置拦截器（获取到响应时的拦截）返回请求拦截器
service.interceptors.response.use(
	(response: any) => {
		if (response.request.status !== 200) {
			console.error('服务器出错', 111);
			return;
		}
		const res = response.data
		/**
		* 根据你的项目实际情况来对 response 和 error 做处理
		* 这里对 response 和 error 不做任何处理，直接返回
		*/
		if (res.code !== 200) {
			// Message({
			//   message: res.Msg || 'Error',
			//   type: 'error',
			//   duration: 5 * 1000
			// })
			console.error(res.message);
			return Promise.reject(res)
		} else {
			return res
		}
	},
	(error) => {

		const { response } = error;
		if (response.status == 401) {
			ElMessageBox.confirm(
				'您已登出，您可以取消停留在此页面，或重新登录,如需进行操作请退出重新登录',
				'登录验证失效',
				{
					confirmButtonText: '去登录',
					cancelButtonText: '取消',
					type: 'warning',
				}
			)
				.then(() => {
					router.push('/login')
					localStorage.clear()
				})
				.catch(() => {
				})

		} else {
			console.error(error.message);
			
		}
		return Promise.reject(error);
	},
);
export default service;

// 导出常用函数
/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url: string, data = {}, params = {}) {
	return service({
		method: 'post',
		url,
		data,
		params,
	});
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url: string, params = {}) {
	return service({
		method: 'get',
		url,
		params,
	});
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url: string, data = {}, params = {}) {
	return service({
		method: 'put',
		url,
		params,
		data,
	});
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url: string, params = {}) {
	return service({
		method: 'delete',
		url,
		params,
	});
}

