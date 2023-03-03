import experienceStyles from '../../styles/Experiencepage.module.scss';
import Card from '../../components/Cards';

const experienceData = [
  {
    company: 'Jobsity',
    date_from: 'Sep 2020',
    date_to: 'Current - Date',
    experience_resume: <ul>
      <li>Develop new features/functionalities for the IT department applications.</li>
      <li> Support and maintain the IT Department applications.</li>
      <li>Train new team members and intern colleagues about frontend technologies.</li>
      <li>Code reviews and constructive feedback about the code</li>
      <li>Participate in the UI/UX decisions about the front-end features by creating wireframes and mock-ups.</li>
      <li> Collaborate closely with the recruitment team of the company improving and evaluating challenges of
        candidates all over the world.
      </li>
    </ul>
  },
  {
    company: 'Word Pos Solutions',
    date_from: 'Jan 2020',
    date_to: 'Sep 2020',
    experience_resume: <ul>
      <li>Development of mobile applications using Android with Java for POS devices based on ISO8583 protocol.</li>
      <li>Support for issues presented in developed POS applications.</li>
      <li>Implementation of features in these applications.</li>
      <li>Proposing solutions for business processes.</li>
    </ul>
  },
  {
    company: 'Freelance',
    date_from: 'Jun 2019',
    date_to: 'Jan 2020',
    experience_resume: <ul>
      <li>Design websites with WordPress.</li>
    </ul>
  }
];

function Experience() {
  return (
    <div style={{ marginTop: '-8rem', padding: '5rem'}}>
      <h1 className={experienceStyles?.experience__title}> Experience </h1>
      <div className={experienceStyles.experience__cards}>
        {experienceData?.map((experience, index) => (
          <Card
            key={`${index}-${experience?.company}`}
            title={experience?.company}
          >
            <span>
              {experience?.date_from} - {experience?.date_to}
            </span>
            <span>{experience?.experience_resume}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Experience;
