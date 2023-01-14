import experienceStyles from '../../styles/ExperiencePage.module.scss';

const experienceData = [
  {
    company: 'Jobsity',
    date_from: 'Sep 2020',
    date_to: 'Current - Date',
    experience_resume: 'Ipsum Lorem Ipsum Lorem',
  },
  {
    company: 'Word Pos Solutions',
    date_from: 'Jan 2020',
    date_to: 'Sep 2020',
    experience_resume: 'Ipsum Lorem Ipsum Lorem',
  },
  {
    company: 'Freelance',
    date_from: 'Jun 2019',
    date_to: 'Jan 2020',
    experience_resume: 'Ipsum Lorem Ipsum Lorem',
  },
];

function Experience() {
  console.log('homepage');
  return (
    <div className={experienceStyles.experience}>
      <h1 className={experienceStyles?.experience__title}> Experience </h1>
      <div className={experienceStyles.experience__cards}>
        {experienceData?.map((experience, index) => (
          <div
            key={`${index}-${experience?.company}`}
            className={experienceStyles.experience__card_content}
          >
            <span>{experience?.company}</span>
            <span>
              {experience?.date_from} - {experience?.date_to}
            </span>
            <span>{experience?.experience_resume}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
