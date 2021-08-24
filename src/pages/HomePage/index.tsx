// import { Carousel } from 'antd';
import Life from './components/Life';
import MapBlock from './components/MapBlock';
import CourseCatalog from './components/CourseCatalog';
import Entry from './components/Entry';
import styles from './index.module.less';

export default function IndexPage() {
  return (
    <div style={{backgroundColor: '#f6f6f6'}}>
      {/* <Carousel>
        <div className={styles.CarouselWrapper} />
        <div className={styles.CarouselWrapper} />
      </Carousel> */}
      <div className={styles.CarouselWrapper} />
      <CourseCatalog />
      <Entry />
      <Life />
      <MapBlock />
    </div>
  );
}
