import { Image } from '@tarojs/components'
import { useState } from 'react'
import { Flex, Field, Dialog } from 'taro-van'
import Taro from '@tarojs/taro'
import FJpeg from '../image/4.jpeg'
import BtnPng from '../image/btn.png'
import './index.less'

export default () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const onSubmit = () => {
    if (value.length < 4) {
      Taro.showToast({ title: '请输入4位数验证码', icon: 'none' })
    } else {
      setVisible(true)
    }
  }
  return <Flex align='center' direction='col' className='index'>
    <Image className='full' mode='aspectFit' src={FJpeg} />
    <Field maxlength={4} onInput={(e) => { setValue(e.detail.value) }} label='防伪码' className='inp' placeholder='请输入瓶身防伪码第二排后4位进行验证' />
    <Image className='btn' mode='aspectFit' onClick={onSubmit} src={BtnPng} />
    <Dialog
      visible={visible}
      title='验证成功！该产品为正品'
      onCancel={() => setVisible(false)}
      onConfirm={() => setVisible(false)}
    />
  </Flex>
}
