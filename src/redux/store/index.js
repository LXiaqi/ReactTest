// 引入createStore 用来创建store
 import {createStore} from 'redux'
 import reducer from './../reducer'
export default ()=> createStore(reducer)