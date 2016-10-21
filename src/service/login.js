/**
 * Created by jemmy on 16/10/20.
 * 登录的异步数据请求接口
 */
import { post } from './xFetch';

export async function login(data) {
  return post('/login', data);
}
export async function signUp(data) {
  return post('/signUp', data);
}
