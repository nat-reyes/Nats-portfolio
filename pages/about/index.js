import aboutStyles from '../../styles/AboutMePage.module.scss';
import Image from 'next/image';
import headerPic from '../../public/assets/img/header/avatar-frontend.png';

function AboutMe() {
  const paragraphTag = {
    open: '<p>',
    closed: '</p>'
  };

  return (
    <div className={aboutStyles.about}>
      <div className={aboutStyles.about__stack}>
        <Image src={headerPic} width={250} height={300} alt="Profile-avatar"/>
      </div>
      <div className={aboutStyles.about__description}>
        <p>
          <span className={aboutStyles.tagColor}>{paragraphTag.open}</span> I am a passionate and skilled software engineer who has been working for 3 years in medium
          size companies building mobile and web applications. I specialize in JavaScript
          technologies and have been working on front-end features using React.js. I also have some
          experience implementing native code features and tools for Android applications. I am
          committed, responsible, and a persistent professional. I am always learning and sharpening
          my knowledge of trending technologies and applying them to real projects. Additionally, I
          am always looking to create team collaborative environments and proposing initiatives for
          team work <span className={aboutStyles.tagColor}>{paragraphTag.closed}</span>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
