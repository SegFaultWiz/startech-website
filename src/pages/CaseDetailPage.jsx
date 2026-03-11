import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/SeoHead.jsx';
import { getCaseById, caseTypeLabels, caseTypeGradients } from '../config/casesConfig';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

export default function CaseDetailPage() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const caseItem = getCaseById(id);
  const lng = i18n.language?.startsWith('zh') ? 'zh' : 'en';

  if (!caseItem) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">案例不存在</p>
          <Link to="/cases" className="text-cyan-600 dark:text-cyan-400 hover:underline">返回案例列表</Link>
        </div>
      </div>
    );
  }

  const name = typeof caseItem.name === 'object' ? caseItem.name[lng] : caseItem.name;
  const summary = typeof caseItem.summary === 'object' ? caseItem.summary[lng] : caseItem.summary;
  const typeLabel = caseTypeLabels[caseItem.type]?.[lng] || caseItem.type;

  const gradient = caseTypeGradients[caseItem.type] || caseTypeGradients.other;
  const coverStyle = caseItem.coverImage
    ? { backgroundImage: `url(${caseItem.coverImage})` }
    : { background: gradient };

  return (
    <>
      <SeoHead
        title={name}
        description={summary}
        keywords={caseItem.tags?.join(', ')}
      />
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link
          to="/cases"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 mb-8 transition-colors"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>返回案例列表</span>
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
          <div
            className="h-64 md:h-80 bg-cover bg-center"
            style={coverStyle}
          />
          <div className="p-8">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 mb-3">
              {typeLabel}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {name}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              {summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {caseItem.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {caseItem.techStack?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">技术栈</h3>
                <div className="flex flex-wrap gap-2">
                  {caseItem.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {caseItem.link && (
              <a
                href={caseItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                查看在线演示
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
          >
            有类似需求？联系我
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
