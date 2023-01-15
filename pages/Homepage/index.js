import homeStyles from '../../styles/Homepage.module.scss';
import '../../styles/Homepage.module.scss';
import headerPic from '../../public/assets/img/header/avatar-frontend.png';
import Image from 'next/image';
import { FaArrowDown, FaLocationArrow } from 'react-icons/fa';
import Button from '../../components/Button';

function Homepage() {
  return (
    <div className={homeStyles.header}>
      <div className={homeStyles.home__headInformation}>
        <span> Hey There </span>
        <span> I am Natalia Reyes</span>
        <div className={homeStyles.home__headInformationJobTitle}>
          <span>Software Engineer - Front end developer </span>
        </div>
      </div>
      <div className={homeStyles.header__pic}>
        <Image src={headerPic} width={250} height={300} />
      </div>
      <div className={homeStyles.header__resume}>
        <div>
          <Button> Resume/CV <FaArrowDown id='icon' style={{ color: '#8b3dff', width: '20px', top: '1px', left: '4px', position: 'relative' }} /> </Button>
        </div>
        <Button> Contact me <FaLocationArrow style={{ color: '#8b3dff', width: '20px', top: '1px', left: '4px', position: 'relative' }} /> </Button>
      </div>
    </div>
  );
}

export default Homepage;
