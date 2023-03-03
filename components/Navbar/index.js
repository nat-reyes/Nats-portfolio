import navbarStyles from '../../styles/Navbar.module.scss';
import linkedInLogo from '../../public/assets/img/contact-icons/linkedin.svg';
import githubLogo from '../../public/assets/img/contact-icons/github.svg';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className={navbarStyles.nav}>
      <ul className={navbarStyles.nav__itemLeft}>
        {/*<Link href='/experience' passHref> Experiences</Link>*/}
        {/*<li>Projects</li>*/}
        {/*<li>About me</li>*/}
      </ul>
      <ul className={navbarStyles.nav__itemRight}>
        <li>
          {' '}
          <a href='https://github.com/nat-reyes' target='_blank' rel='noreferrer'>
            <Image src={githubLogo} alt='Github' />
          </a>
        </li>
        <li>
          {' '}
          <a href='https://www.linkedin.com/in/nat-reyes/' target='_blank' rel='noreferrer'>
            <Image src={linkedInLogo} alt='LinkedIn' />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
