import homeStyles from '../../styles/Homepage.module.scss';

function Homepage() {
  console.log('homepage');
  return (
    <div className={homeStyles.header}>
      <div className={homeStyles.home__headInformation}>
        <span> Hey There </span>
        <span> I am Natalia Reyes</span>
        <span> Software Engineer - Front end developer </span>
      </div>
      <div className={homeStyles.header__pic}>
        image
        <img />
      </div>
      <div className={homeStyles.header__resume}>resume download option</div>
    </div>
  );
}

export default Homepage;
