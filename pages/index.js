import SEO from '../components/SEO';
import Homepage from './Homepage';
import AboutMe from './About';
import Experience from './Experience';
import Projects from './Projects';

export default function Home() {
  return (
    <div className="container">
      <SEO title="Nat Portfolio" description="Front end Developer" keywords="front-end" />
      <Homepage />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}
