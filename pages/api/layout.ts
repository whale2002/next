import type { NextApiRequest, NextApiResponse } from 'next'
import { ILayoutProps } from '../../components/Layout'
import { isEmpty } from 'lodash'

const getLayoutData = (
  req: NextApiRequest,
  res: NextApiResponse<ILayoutProps>
) => {
  const {
    title,
    qr_code,
    site_number,
    public_number,
    copy_rights,
    qr_code_image,
    link_lists
  } = {
    title: 'SSR Demo',
    qr_code: 'WeChat',
    site_number: '京ICP备XXXXXXXX号-X',
    public_number: '京公网安备 xxxxxxxxxxxxxx号',
    copy_rights: 'Copyright © 2022-present Howie Chin',
    qr_code_image: {
      data: {
        name: 'zhihu.jpg',
        alternativeText: 'zhihu.jpg',
        caption: 'zhihu.jpg',
        width: 640,
        height: 640,
        formats: {
          thumbnail: {
            name: 'thumbnail_zhihu.jpg',
            hash: 'thumbnail_zhihu_7ef268bc5d',
            ext: '.jpg',
            mime: 'image/jpeg',
            path: {},
            width: 156,
            height: 156,
            size: 5.94,
            url: '/uploads/thumbnail_zhihu_7ef268bc5d.jpg'
          },
          small: {
            name: 'small_zhihu.jpg',
            hash: 'small_zhihu_7ef268bc5d',
            ext: '.jpg',
            mime: 'image/jpeg',
            path: {},
            width: 500,
            height: 500,
            size: 47.84,
            url: '/uploads/small_zhihu_7ef268bc5d.jpg'
          }
        },
        hash: 'zhihu_7ef268bc5d',
        ext: '.jpg',
        mime: 'image/jpeg',
        size: 61.12,
        url: 'https://spacee-1306444757.cos.ap-beijing.myqcloud.com/img/zhihu.jpg',
        previewUrl: {},
        provider: 'local',
        provider_metadata: {}
      }
    },
    link_lists: {
      data: [
        {
          title: '技术栈',
          links: {
            data: [
              { label: 'React', link: 'https://reactjs.org/' },
              { label: 'Vue', link: 'https://vuejs.org/' },
              { label: 'NextJS', link: 'https://nextjs.org/' }
            ]
          }
        },
        {
          title: '了解更多',
          links: {
            data: [
              { label: '语雀' },
              {
                label: '知乎'
              },
              { label: 'Github' },
              { label: '掘金' }
            ]
          }
        },
        {
          title: '联系我',
          links: {
            data: [
              { label: 'WeChat', link: {} },
              { label: 'QQ', link: {} }
            ]
          }
        }
      ]
    }
  }

  res.status(200).json({
    navbarData: {},
    footerData: {
      title,
      linkList: link_lists?.data?.map((item: any) => {
        return {
          title: item.title,
          list: item?.links?.data?.map((_item: any) => {
            return {
              label: _item.label,
              link: isEmpty(_item.link) ? '' : _item.link
            }
          })
        }
      }),
      qrCode: {
        image: qr_code_image.data.url,
        text: qr_code
      },
      copyRight: copy_rights,
      siteNumber: site_number,
      publicNumber: public_number
    }
  })
}

export default getLayoutData
