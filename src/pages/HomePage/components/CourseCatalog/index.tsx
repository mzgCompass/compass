import { Row, Col, Card, Typography } from 'antd';
import { InView } from 'react-intersection-observer';
import classNames from 'classnames';
import 'animate.css';
import styles from './index.module.less';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const CourseCatalog = () => {
  
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.MainWrapper}>
      <div>
        <Title level={2} className='commont-primary-title'>课程类型</Title>
        <Paragraph className='commont-primary-sub-title' >Course Catalog</Paragraph>
      </div>
      <div className={`w1400 ${styles.ContentWrapper}`}>
        <InView>
          {
            ({inView, ref}) => (
              <div ref={ref}>
                <Row gutter={30}>
                  <Col
                    span={8}
                    className={classNames({
                      [styles.item]: true,
                      animate__animated: true,
                      animate__fadeInUp: inView,
                    })}
                    style={{animationDelay: '0.1s'}}
                  >
                    <Card
                      bordered={false}
                      onClick={() => handleClick('https://www.pennington.org/academics/upper-school/course-catalog/english')}
                      hoverable
                      style={{ width: '100%' }}
                      cover={<div className={styles.cover}><img alt="课程选择" src="https://pic.imgdb.cn/item/612481b744eaada739cf4583.jpg" className={styles.img} /></div>}
                    >
                      <Meta title="English" description={<div className={styles.desc}>Graduation requirement: English required every semester</div>} />
                    </Card>
                  </Col>
                  <Col
                    span={8}
                    className={classNames({
                      [styles.item]: true,
                      animate__animated: true,
                      animate__fadeInUp: inView,
                    })}
                    style={{animationDelay: '0.2s'}}
                  >
                    <Card
                      bordered={false}
                      onClick={() => handleClick('https://www.pennington.org/academics/upper-school/course-catalog/history-and-social-studies')}
                      hoverable
                      style={{ width: '100%' }}
                      cover={<div className={styles.cover}><img alt="课程选择" src="https://pic.imgdb.cn/item/6124817444eaada739cecc23.jpg" className={styles.img} /></div>}
                    >
                      <Meta title="History and Social Studies" description={<div className={styles.desc}>Graduation requirement: World History, United States History, and either two additional semester electives or one additional yearlong elective</div>} />
                    </Card>
                  </Col>
                  <Col
                    span={8}
                    className={classNames({
                      [styles.item]: true,
                      animate__animated: true,
                      animate__fadeInUp: inView,
                    })}
                    style={{animationDelay: '0.3s'}}
                  >
                    <Card
                      bordered={false}
                      onClick={() => handleClick('https://www.pennington.org/academics/upper-school/course-catalog/science')}
                      hoverable
                      style={{ width: '100%' }}
                      cover={<div className={styles.cover}><img alt="课程选择" src="https://pic.imgdb.cn/item/612481a444eaada739cf23e7.png" className={styles.img} /></div>}
                    >
                      <Meta title="Science" description={<div className={styles.desc}>Graduation requirement: Three years of study, including two lab courses (Biology, Chemistry)</div>} />
                    </Card>
                  </Col>
                </Row>
              </div>
            )
          }
        </InView>
        <InView>
          {
            ({inView, ref}) => (
              <a
                ref="ref"
                href="https://www.pennington.org/academics/upper-school/course-catalog"
                target="_blank"
                className={classNames({
                  'common-btn-wrapper': true,
                  animate__animated: true,
                  animate__fadeInUp: inView,
                })}
                style={{animationDelay: '0.1s'}}
              >
                MORE +
              </a>
            )
          }
        </InView>
      </div>
    </div>
  );
};

export default CourseCatalog;