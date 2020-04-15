// 引入Mock
import Mock from 'mockjs'
// 引入data数据
import data from './data.json'

Mock.mock('/home',{code: 0, data:data})