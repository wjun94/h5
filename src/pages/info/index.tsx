import { Image } from '@tarojs/components'
import { Flex, Typography } from 'taro-van'
import InfoPng from '../image/info.png'
import BgdPng from '../image/bgd.png'
import LogoJpg from '../image/logo.jpg'
import Logo1Jpg from '../image/logo1.jpg'
import Btn2Png from '../image/btn2.png'
import './index.less'

export default () => {
  const type = window.location.hash.split('=')[1]
  const arr = [
    {
      label: '净含量',
      value: '500ml'
    },
    {
      label: '酒精度数',
      value: '53°'
    },
    {
      label: '香型',
      value: '酱香型'
    },
    {
      label: '食品添加剂',
      value: '无'
    },
    {
      label: '箱规',
      value: '500ml*6'
    },
    {
      label: '原料',
      value: '水、高粱、小麦'
    },
    {
      label: '存储条件',
      value: '常温、干燥处保存'
    },
    {
      label: '厂家热线',
      value: '400-667-1988'
    },
    {
      label: '厂家名称',
      value: '贵州茅台酒厂（集团）习酒有限责任公司'
    },
    {
      label: '厂家地址',
      value: '贵州省遵义市习水县习酒镇'
    },
  ]
  return <Flex style={{ backgroundImage: `url(${BgdPng})` }} align='center' direction='column' className='info-page'>
    <Flex className='head' justify='center' style={{ backgroundImage: `url(${InfoPng})` }}>
      <Image className='img2' src={type === '1' ? Logo1Jpg : LogoJpg} />
    </Flex>
    <Flex className='button' align='center' justify='center' style={{ backgroundImage: `url(${Btn2Png})` }}>
      <Typography.Text type='white'>产品详情</Typography.Text>
    </Flex>
    <Flex direction='column' className='footer'>
      {
        arr.map(item => <Flex key={item.label} className='main'>
          <Typography.Text className='first' size='xl'>{item.label}</Typography.Text>
          <Typography.Text className='txt' size='xl'>{item.value}</Typography.Text>
        </Flex>)
      }
    </Flex>
  </Flex>
}
