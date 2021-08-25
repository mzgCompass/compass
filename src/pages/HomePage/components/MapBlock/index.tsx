import { Carousel } from 'antd';
import styles from './index.module.less';

const MapBlock = () => {
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.MaskWrapper}></div>
      <div className={`${styles.ContentWrapper} w1400`}>
        <div className={styles.CarouselWrapper}>
          <Carousel
            className={styles.CarouselContentWrapper}
            dotPosition="bottom"
            dots={{ className: 'carousel-dots-bottomLeft' }}
            // autoplay
          >
            <div className={styles.item}>
              <div>
                <img
                  src="https://pic.imgdb.cn/item/612492ce44eaada739f01942.jpg"
                  className={styles.itemImg}
                />
              </div>
              <div className={styles.infoWrapper}>
                <div className={styles.title}>Pennington Quality Market</div>
                <div className={styles.text}>
                  地址：X, 25 NJ-31 S Ste, Pennington, NJ 08534美国
                </div>
                <div className={styles.text}>电话：+16097370058</div>
                <div className={styles.text}>网址：http://pqmonline.com</div>
              </div>
            </div>

            <div className={styles.item}>
              <div>
                <img
                  src="https://pic.imgdb.cn/item/6124969b44eaada739f75dbe.jpg"
                  className={styles.itemImg}
                />
              </div>
              <div className={styles.infoWrapper}>
                <div className={styles.title}>Vitos Pizza</div>
                <div className={styles.text}>
                  地址：4 N Main St, Pennington, NJ 08534美国
                </div>
                <div className={styles.text}>电话：+16097378520</div>
                <div className={styles.text}>
                  网址：https://www.vitospennington.com
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div>
                <img
                  src="https://pic.imgdb.cn/item/612497c344eaada739f99c3b.jpg"
                  className={styles.itemImg}
                />
              </div>
              <div className={styles.infoWrapper}>
                <div className={styles.title}>Sumo Restaurant</div>
                <div className={styles.text}>
                  地址：12 S Main St, Pennington, NJ 08534美国
                </div>
                <div className={styles.text}>电话：+16097378788</div>
                <div className={styles.text}>网址：http://sumo12.com</div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MapBlock;
