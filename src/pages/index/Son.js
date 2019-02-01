import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Son extends Component{
    render() {
        console.log('this.props:', this.props)
        return (
            <View>
                {/* 控制台看不到this.props.children!!! */}
                {this.props.children}
            </View>
        )
    }
}

export default Son;

