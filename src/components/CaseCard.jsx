import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { caseTypeLabels, caseTypeGradients } from '../config/casesConfig';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function CaseCard({ caseItem, compact = false }) {
  const { i18n } = useTranslation();
  const lng = i18n.language?.startsWith('zh') ? 'zh' : 'en';
  const name = typeof caseItem.name === 'object' ? caseItem.name[lng] : caseItem.name;
  const summary = typeof caseItem.summary === 'object' ? caseItem.summary[lng] : caseItem.summary;
  const typeLabel = caseTypeLabels[caseItem.type]?.[lng] || caseItem.type;
  const hasLink = caseItem.link && !compact;

  const gradient = caseTypeGradients[caseItem.type] || caseTypeGradients.other;
  const coverStyle = caseItem.coverImage
    ? { backgroundImage: `url(${caseItem.coverImage})` }
    : { background: gradient };

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
      <Link to={`/cases/${caseItem.id}`} className="block">
        <div
          className="h-40 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={coverStyle}
        />
        <div className="p-5">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 mb-2">
            {typeLabel}
          </span>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {name}
          </h3>
          {!compact && (
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-2">
              {summary}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5">
            {caseItem.tags?.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                {tag}
              </span>
            ))}
          </div>
          {hasLink && (
            <div className="mt-3 flex items-center gap-1 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              <span>查看演示</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
