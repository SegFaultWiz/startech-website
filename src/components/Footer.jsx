import siteConfig from '../config/siteConfig.js';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} {siteConfig.siteTitle}. 保留所有权利。</p>
        <p className="mt-2">{siteConfig.pages.home.find(s => s.type === 'contact')?.data.address}</p>
      </div>
    </footer>
  );
}
