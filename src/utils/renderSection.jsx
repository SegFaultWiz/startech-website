import HeroSection from '../components/HeroSection.jsx';
import FeatureSection from '../components/FeatureSection.jsx';
import TeamSection from '../components/TeamSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

const componentMap = {
  hero: HeroSection,
  features: FeatureSection,
  team: TeamSection,
  contact: ContactSection
};

export function renderSections(sections) {
  return sections.map((section, index) => {
    const Component = componentMap[section.type];
    if (!Component) return null;
    return <Component key={index} data={section.data} />;
  });
}
