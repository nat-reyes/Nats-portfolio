import SEO from '../components/SEO';
import Homepage from './homepage';
import AboutMe from './about';
import Experience from './experience/[slug]';
import Projects from './projects';

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
