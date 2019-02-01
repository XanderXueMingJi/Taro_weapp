import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import Son from './Son';
import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  // add () {
  //   dispatch(add())
  // },
  add (one = 1) {
    // dispatch(add())
    console.log('one:', one)
    dispatch(add(one))
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  childClick() {
    console.log('点击儿子按钮')
  }

  render () {
    return (
      <View className='index'>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button> */}
        <Button className='add_btn' onClick={this.props.add.bind(this, 789)}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World, 1501</Text></View>
        <Button onClick={this.childClick}>父组件按钮</Button>
        <Son>
          <View>
            Thank you for 我是大英雄!!!! using Taro.
          </View>
        </Son>
      </View>
    )
  }
}

export default Index
