import { Component } from 'react'
import { Image } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro';
import { Flex, Typography } from 'taro-van'
import OneJpeg from '../image/1.jpeg'
import TwoJpeg from '../image/2.jpeg'
import ThreeJpeg from '../image/3.jpeg'
import './index.less'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <Flex direction='col' className='index'>
        <Flex className='head'>
          <Image className='full' mode='aspectFit' src={OneJpeg} />
          <Flex className='content' direction='col'>
            <Typography.Text type='white' size='xs'>名称：贵州习酒.御藏</Typography.Text>
            <Typography.Text type='white' size='xs'>生产日期：2021-2-22</Typography.Text>
            <Typography.Text type='white' size='xs'>酒瓶防伪码：062500182099345348XXXX</Typography.Text>
            <Typography.Text onClick={() => navigateTo({ url: '/pages/detail/index' })} className='txt' type='white'>该产品为<Typography.Text className='info'>真品</Typography.Text>，请放心引用，如有疑问请<Typography.Text className='info'>进一步验证</Typography.Text>。</Typography.Text>
          </Flex>
        </Flex>
        <Image className='full bt' mode='aspectFit' src={TwoJpeg} />
        <Image className='full' mode='aspectFit' src={ThreeJpeg} />
      </Flex>
    )
  }
}
