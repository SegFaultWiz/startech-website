import { Helmet } from 'react-helmet-async';

/**
 * 页面 SEO 组件
 * @param {string} title - 页面标题
 * @param {string} description - 页面描述
 * @param {string} keywords - 关键词，逗号分隔
 */
export default function SeoHead({ title, description, keywords }) {
  const siteName = 'lizhongjie.cn';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
}
