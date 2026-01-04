import { renderSections } from '../utils/renderSection.jsx';
import siteConfig from '../config/siteConfig.js';

export default function Home() {
  return <>{renderSections(siteConfig.pages.home)}</>;
}
