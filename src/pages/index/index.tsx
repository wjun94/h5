import { useEffect, useState } from 'react'
import { Image } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro';
import { Flex, Dialog, Typography, Icon, Button } from 'taro-van'
import { parse } from 'query-string';
import { codes1 } from './code1'
import { codes2 } from './code2'
import OneJng from '../image/1.png'
import LogoJpg from '../image/logo.jpg'
import Logo1Jpg from '../image/logo1.jpg'
import ThreeJpeg from '../image/3.jpeg'
import './index.less'

export default () => {
  const [visible, setVisible] = useState(false);
  const search = window.location.hash.match(/\?([\w\W])+/)
  const { type, idx } = parse(search ? search[0] : '')
  console.log(idx)
  const txt = { date: '2021年12月18日', label: '贵州习酒.御藏', info: '酒瓶' }
  // 随机6位数
  const code = () => {
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    const maxPos = chars.length
    let target = ''
    for (let i = 0; i < 6; i++) {
      target += chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return target
  }
  useEffect(() => {
    const arr: any = []
    for (let i = 0; i < 2000; i++) {
      arr[i] = []
      for (let j = 0; j < 6; j++) {
        arr[i].push(code())
      }
    }
  })
  if (type === '1') {
    txt.date = '2021年12月16日'
    txt.label = '贵州习酒.御品'
    txt.info = '酒盒'
  } else if (type === '2') {
    txt.date = '2021年12月18日'
    txt.label = '贵州习酒.御藏'
    txt.info = '酒盒'
  }

  const onNav = (i) => {
    if (i === 0) {
      navigateTo({ url: `/pages/info/index?type=${type || 0}` })
    } else {
      setVisible(true)
    }
  }
  return (
    <Flex direction='column' className='index'>
      <Flex className='head'>
        <Image className='full' mode='aspectFit' src={OneJng} />
        <Flex className='logo'>
          <Image src={type === '1' ? Logo1Jpg : LogoJpg} />
        </Flex>
        <Flex className='content' direction='column'>
          <Typography.Text type='white' size='xs'>名称：{txt.label}</Typography.Text>
          <Typography.Text type='white' size='xs'>生产日期：{txt.date}</Typography.Text>
          <Typography.Text type='white' size='xs'>箱内{txt.info}防伪码后6位：</Typography.Text>
          <Flex>
            {
              idx === undefined ? <Typography.Text type='white' size='xs'>{txt.info}防伪码：062500182099345348XXXXXX</Typography.Text> : (type === '1' ? codes1 : codes2)[Number(idx || 0)].map(item => <Typography.Text key={item} type='white' size='xs' className='mr20'>{item}</Typography.Text>)
            }
          </Flex>
          <Typography.Text onClick={() => navigateTo({ url: '/pages/detail/index' })} className='txt' type='white'>该产品为<Typography.Text className='info'>真品</Typography.Text>，请放心引用，如有疑问请<Typography.Text className='info'>进一步验证</Typography.Text>。</Typography.Text>
        </Flex>
      </Flex>
      <Flex justify='around' className='nav'>
        {
          [{
            name: '产品详情',
            icon: 'icon-dingdansousuo',
          }, {
            name: '会员中心',
            icon: 'icon-dianhuaben-copy',
          }, {
            name: '积分商城',
            icon: 'icon-libao',
          }, {
            name: '网上商城',
            icon: 'icon-gouwuche1',
          }, {
            name: '微信服务',
            icon: 'icon-weixin',
          }].map((item, i) => <Flex direction='column' align='center' key={item.name} onClick={() => onNav(i)}>
            <Flex justify='center' align='center' className='img'>
              <Icon size='xl' icon={item.icon} />
            </Flex>
            <Typography.Text>{item.name}</Typography.Text>
          </Flex>)
        }
      </Flex>

      <Image className='full' mode='aspectFit' src={ThreeJpeg} />

      <Flex className='more' align='center' justify='center'>
        <Button onClick={() => setVisible(true)} plain type='default'>查看更多</Button>
      </Flex>

      <Flex className='more' align='center' justify='center'>
        <Typography.Text type='white'>版权所有@贵州茅台酒厂（集团）习酒有限责任公司</Typography.Text>
        <Typography.Text type='white'>版权热线：400-667-1988</Typography.Text>
      </Flex>

      <Dialog
        visible={visible}
        title='即将上线，敬请期待'
        onCancel={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
      />
    </Flex>
  )
}