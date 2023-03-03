import homeStyles from '../../styles/Homepage.module.scss';
import '../../styles/Homepage.module.scss';
import { FaArrowDown, FaLocationArrow } from 'react-icons/fa';
import btnStyle from '../../styles/Button.module.scss';
import wip from '../../public/assets/img/header/work-in-progress.png';
import Image from 'next/image';

function Homepage() {
  const hvUrl = 'https://dusty-baseball-55f.notion.site/Natalia-Reyes-d4d72db0888741cdb633db8a2ead3ce7';
  return (
    <>
      <div className={homeStyles.home__wip}>
        <Image width={100} height={100} src={wip} alt='wip' />
      </div>
      <div className={homeStyles.header}>
        <div className={homeStyles.home__headInformation}>
          <span className={homeStyles.home__headInformationGreet}> Hey There</span>
          <span className={homeStyles.home__headInformationName}> I am Natalia Reyes</span>
          <div className={homeStyles.home__headInformationJobTitle}>
            <span>Software Engineer - Front end developer </span>
          </div>
        </div>
        <div className={homeStyles.header__resume}>
          <a className={btnStyle.link} href={hvUrl} target='_blank' rel='noopener noreferrer'> Resume <FaArrowDown
            id='icon' style={{ color: '#8b3dff', width: '20px', top: '1px', left: '4px', position: 'relative' }} /> </a>
          <a className={btnStyle.link} href='mailto:aylin.reyes.8@gmail.com?subject = Hey Nat!' target='_blank'
             rel='noopener noreferrer'> Contact me! <FaLocationArrow
            className={homeStyles.iconStyle} /></a>
        </div>
      </div>
    </>
  );
}

export default Homepage;
