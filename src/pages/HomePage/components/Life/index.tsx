import { Row, Col, Typography, List } from 'antd';
import { InView } from 'react-intersection-observer';
import classNames from 'classnames';
import 'animate.css';
import styles from './index.module.less';

const { Title, Paragraph } = Typography;

const Life = () => {
  const mobileList = [
    {
      title: 'Verizon',
      logo: 'https://pic.imgdb.cn/item/6123747f44eaada739e67bec.jpg',
      link: 'https://www.verizon.com/',
      description: 'Verizon一般指威瑞森电信。Verizon公司是由美国两家原地区贝尔运营公司——大西洋贝尔和Nynex合并建立BellAtlantic后,独立电话公司GTE合并而成的，公司正式合并后，Verizon一举成为美国最大的本地电话公司、最大的无线通信公司',
    },
    {
      title: 'AT&T',
      logo: 'https://pic.imgdb.cn/item/612375b044eaada739ea7d85.jpg',
      link: 'https://www.att.com/',
      description: '美国电话电报公司（AT&T）是一家美国电信公司，成立于1877年，曾长期垄断美国长途和本地电话市场。 AT&T在近20年中，曾经过多次分拆和重组。',
    },
    {
      title: 'T-Mobile',
      logo: 'https://pic.imgdb.cn/item/6123767f44eaada739ed2c93.jpg',
      link: 'https://www.t-mobile.com/',
      description: 'T-Mobile是一家跨国移动电话运营商，属于Freemove 联盟。T-Mobile 在西欧和美国运营GSM网络，并通过金融手段参与东欧和东南亚的网络运营。',
    },
  ];
  const bankList = [
    {
      title: 'American Bank',
      logo: 'https://pic.imgdb.cn/item/6123724b44eaada739df0a7e.jpg',
      link: 'https://www.ambk.com/',
      description: '美国银行（Bank of America，NYSE：BAC，TYO：8648），原中文名“美国美洲银行”，创建于1968年10月，总部设在美国旧金山。以资产计是美国第一大商业银行；2006年，根据《福布斯》2000年排名是世界第三大公司。',
    },
    {
      title: 'PNC Bank',
      logo: 'https://pic.imgdb.cn/item/612371ed44eaada739ddd5e3.jpg',
      link: 'https://www.pnc.com/en/personal-banking.html',
      description: 'PNC金融服务集团(PNC Financial Services)是一家美国金融服务公司,总部位于匹兹堡。公司业务包括在19个州和哥伦比亚特区特许经营区域银行。',
    },
    {
      title: 'Wells Fargo',
      logo: 'https://pic.imgdb.cn/item/6123719444eaada739dcaa34.jpg',
      link: 'https://www.wellsfargo.com/',
      description: 'WELLS FARGO一般指富国银行。美国富国银行（WELLS FARGO），创立于1852年，总部设在旧金山，是美国唯一一家获得AAA评级的银行。创始人是HENRY WELLS和WILLIAM FARGO，全球市值最高银行。',
    },
  ];
  return (
    <div className={styles.BgWhite}>
      <div className={`w1400 ${styles.MainWrapper}`}>
        <div>
          <Title level={2} className='commont-primary-title'>美国生活</Title>
          <Paragraph className='commont-primary-sub-title' >American Life</Paragraph>
        </div>
        <InView>
          {
            ({ inView, ref }) => (
              <Row ref={ref} className={styles.LifeWrapper} gutter={30}>
                <Col
                  span={12}
                  className={classNames({
                    animate__animated: true,
                    animate__fadeInUp: inView,
                  })}
                  style={{animationDelay: '0.1s'}}
                >
                  <div className={styles.item}>
                    <List
                      itemLayout="horizontal"
                      dataSource={mobileList}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<div className={styles.itemImgWrapper}><img src={item.logo} className={styles.listImg} /></div>}
                            title={<a className={styles.title} href={item.link} target="_blank">{item.title}</a>}
                            description={<div className={styles.desc}>{item.description}</div>}
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>
                <Col
                  span={12}
                  className={classNames({
                    animate__animated: true,
                    animate__fadeInUp: inView,
                  })}
                  style={{animationDelay: '0.2s'}}
                >
                  <div className={styles.item}>
                    <List
                      itemLayout="horizontal"
                      dataSource={bankList}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<div className={styles.itemImgWrapper}><img src={item.logo} className={styles.listImg} /></div>}
                            title={<a className={styles.title} href={item.link} target="_blank">{item.title}</a>}
                            description={<div className={styles.desc}>{item.description}</div>}
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>
              </Row>
            )
          }
        </InView>
      </div>
    </div>
  );
};

export default Life;