import { Row, Col, Typography, Card } from 'antd';
import { InView } from 'react-intersection-observer';
import classNames from 'classnames';
import 'animate.css';
import styles from './index.module.less';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Entry = () => {
  return (
    <div className={`w1400 ${styles.MainWrapper}`}>
      <div>
        <Title level={2} className='commont-primary-title'>入境美国</Title>
        <Paragraph className='commont-primary-sub-title' >Entry to the United States</Paragraph>
      </div>
      <InView>
        {
          ({ inView, ref }) => (
            <Row ref={ref} className={styles.LifeWrapper} gutter={30}>
              <Col
                span={8}
                className={classNames({
                  animate__animated: true,
                  animate__fadeInUp: inView,
                })}
                style={{animationDelay: '0.1s'}}
              >
                <Card
                  bordered={false}
                  hoverable
                  style={{ width: '100%' }}
                  cover={<div className={styles.cover}><img alt="I20表格" src="https://pic.imgdb.cn/item/6124450644eaada739545fef.jpg" className={styles.img} /></div>}
                >
                  <Meta
                    title="I20表格"
                    description={
                      <div>
                        <div className={styles.desc}>申请美国留学的同学在拿到学校录取通知书时会连带收到I-20表格</div>
                        <div className="common-download-second-btn">点击下载</div>
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col
                span={8}
                className={classNames({
                  animate__animated: true,
                  animate__fadeInUp: inView,
                })}
                style={{animationDelay: '0.2s'}}
              >
                <Card
                  bordered={false}
                  hoverable
                  style={{ width: '100%' }}
                  cover={<div className={styles.cover}><img alt="护照" src="https://pic.imgdb.cn/item/61248b4a44eaada739e23113.jpg" className={styles.img} /></div>}
                >
                  <Meta
                    title="护照"
                    description={
                      <div>
                        <div className={styles.desc}>美国护照（Passport, United States of America）是由美利坚合众国出于国际旅行目的发放给美国公民和美国国民使用的、用于在国际旅行中证明其身份的文件</div>
                        <div className="common-download-second-btn">点击下载</div>
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col
                span={8}
                className={classNames({
                  animate__animated: true,
                  animate__fadeInUp: inView,
                })}
                style={{animationDelay: '0.3s'}}
              >
                <Card
                  bordered={false}
                  hoverable
                  style={{ width: '100%' }}
                  cover={<div className={styles.cover}><img alt="必带物品" src='https://pic.imgdb.cn/item/612445ae44eaada739552c24.jpg' className={styles.img} /></div>}
                >
                  <Meta
                    title="必带物品"
                    description={
                      <div>
                        <div className={styles.desc}>美国留学必带行李物品清单，出国不再手忙脚乱</div>
                        <div className="common-download-second-btn">点击下载</div>
                      </div>
                    }
                  />
                </Card>
              </Col>
            </Row>
          )
        }
      </InView>
    </div>
  );
};

export default Entry;