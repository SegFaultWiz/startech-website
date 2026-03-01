import SeoHead from '../components/SeoHead.jsx';
import { renderSections } from '../utils/renderSection.jsx';
import siteConfig from '../config/siteConfig.js';

export default function Home() {
  return (
    <>
      <SeoHead
        title="首页"
        description={siteConfig.seo?.description || '全栈开发，网站建站、小程序、管理系统。'}
        keywords={siteConfig.seo?.keywords || '网站建站,小程序,外包,全栈开发'}
      />
      {renderSections(siteConfig.pages.home)}
    </>
  );
}
