import projectsStyle from '../../styles/ProjectsStyle.module.scss';
import css from '../../public/assets/img/technologies/css.png';
import html from '../../public/assets/img/technologies/html.png';
import js from '../../public/assets/img/technologies/javascript.png';
import storybook from '../../public/assets/img/technologies/storybook.png';
import jest from '../../public/assets/img/technologies/jest.png';
import cy from '../../public/assets/img/technologies/cy.png';
import react from '../../public/assets/img/technologies/react.png';
import redux from '../../public/assets/img/technologies/Redux.png';
import nextjs from '../../public/assets/img/technologies/next.png';
import android from '../../public/assets/img/technologies/android.png';
import java from '../../public/assets/img/technologies/java.png';

import Image from 'next/image';
// const projects = [
//   {
//     name: 'Jtalent',
//     description: 'Jtalent is a huge application created to support all the workflow of the company. It is the core of the company since employees needs to go to Jtalent to support their day to day tasks.',
//     stack: 'React Js - Redux - Jest - Cypress - SASS - Netlify'
//   },
//   {
//     name: 'Jobsity App',
//     description: 'Jobsity ',
//     stack: 'React Js - Redux'
//   },
//   {
//     name: 'Word Pos Solutions',
//     description: 'Ipsum Lorem Ipsum Lorem'
//   },
//   {
//     name: 'Freelance',
//     date_from: 'Jun 2019',
//     date_to: 'Jan 2020',
//     experience_resume: 'Ipsum Lorem Ipsum Lorem'
//   }
// ];

function Projects() {
  return (
    <div className={projectsStyle.technologiesContainer}>
      <h1> Technologies </h1>
      <div className={projectsStyle?.technologiesContainer__cards}>
        <Image width={100} height={100} src={css} alt="CSS" />
        <Image width={100} height={100} src={html} alt="HTML" />
        <Image width={100} height={100} src={js} alt="JS" />
        <Image width={100} height={100} src={react} alt="React" />
        <Image width={100} height={100} src={jest} alt="Jest" />
        <Image width={100} height={100} src={storybook} alt="storybook" />
        <Image width={100} height={100} src={cy} alt="CY" />
        <Image width={120} height={100} src={redux} alt="Redux" />
        <Image style={{ color: '#fff' }} width={120} height={100} src={nextjs} alt="Next js" />
        <Image style={{ color: '#fff' }} width={100} height={100} src={android} alt="Android" />
        <Image style={{ color: '#fff' }} width={100} height={100} src={java} alt="Java" />
      </div>
    </div>
  );
}

export default Projects;
