/**
 * 开发案例数据结构
 * 每个案例包含：项目名称、类型、简介、技术栈、图片、链接、标签
 */

export const CASE_TYPES = {
  website: 'website',       // 网站建站
  miniprogram: 'miniprogram', // 小程序
  h5: 'h5',                 // H5/移动端
  admin: 'admin',           // 管理系统/后台
  other: 'other'
};

export const caseTypeLabels = {
  [CASE_TYPES.website]: { zh: '网站建站', en: 'Website' },
  [CASE_TYPES.miniprogram]: { zh: '小程序', en: 'Mini Program' },
  [CASE_TYPES.h5]: { zh: 'H5/移动端', en: 'H5 / Mobile' },
  [CASE_TYPES.admin]: { zh: '管理系统', en: 'Admin Panel' },
  [CASE_TYPES.other]: { zh: '其他', en: 'Other' }
};

/**
 * 各类型案例的默认渐变背景（无图片时使用）
 * 添加 coverImage 后可覆盖
 */
export const caseTypeGradients = {
  [CASE_TYPES.website]: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  [CASE_TYPES.miniprogram]: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  [CASE_TYPES.h5]: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
  [CASE_TYPES.admin]: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  [CASE_TYPES.other]: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
};

/**
 * 案例列表
 * 可替换为真实项目数据；有 coverImage 时显示图片，否则显示渐变背景
 */
export const cases = [
  {
    id: '1',
    name: { zh: '企业官网建站', en: 'Corporate Website' },
    type: CASE_TYPES.website,
    summary: { zh: '为企业打造的品牌官网，响应式设计，支持多语言与暗色模式。', en: 'Brand website with responsive design, i18n and dark mode.' },
    techStack: ['React', 'Vite', 'Tailwind CSS'],
    coverImage: '', // 填入真实图片路径如 /cases/website-demo.jpg
    images: [],
    link: 'https://lizhongjie.cn',
    tags: ['企业官网', '响应式', '多语言'],
    featured: true,
    year: '2025'
  },
  {
    id: '2',
    name: { zh: '电商小程序', en: 'E-commerce Mini Program' },
    type: CASE_TYPES.miniprogram,
    summary: { zh: '基于微信小程序的商城系统，支持商品展示、购物车、订单管理。', en: 'WeChat mini-program e-commerce with product catalog, cart and orders.' },
    techStack: ['微信小程序', '云开发'],
    coverImage: '',
    images: [],
    link: '',
    tags: ['电商', '小程序', '云开发'],
    featured: true,
    year: '2024'
  },
  {
    id: '3',
    name: { zh: '数据可视化大屏', en: 'Data Dashboard' },
    type: CASE_TYPES.website,
    summary: { zh: '基于 Vue + ECharts 的可视化大屏，实时展示业务数据。', en: 'Real-time dashboard with Vue and ECharts.' },
    techStack: ['Vue3', 'ECharts', '大屏适配'],
    coverImage: '',
    images: [],
    link: '',
    tags: ['数据可视化', '大屏', 'ECharts'],
    featured: true,
    year: '2024'
  },
  {
    id: '4',
    name: { zh: '婚礼邀请 H5', en: 'Wedding Invitation H5' },
    type: CASE_TYPES.h5,
    summary: { zh: '移动端婚礼电子请柬，支持照片轮播、地图导航、祝福留言。', en: 'Mobile wedding e-invitation with gallery, map and guestbook.' },
    techStack: ['Vue', 'Vant', 'H5'],
    coverImage: '',
    images: [],
    link: '',
    tags: ['H5', '婚礼', '移动端'],
    featured: false,
    year: '2024'
  },
  {
    id: '5',
    name: { zh: '设备管理系统', en: 'Device Management System' },
    type: CASE_TYPES.admin,
    summary: { zh: '企业级设备资产管理后台，支持增删改查、统计报表。', en: 'Enterprise device asset management with CRUD and analytics.' },
    techStack: ['React', 'Ant Design', 'TypeScript'],
    coverImage: '',
    images: [],
    link: '',
    tags: ['后台', '管理系统', 'Ant Design'],
    featured: true,
    year: '2024'
  }
];

/**
 * 获取精选案例（用于首页展示）
 */
export function getFeaturedCases(limit = 4) {
  return cases.filter(c => c.featured).slice(0, limit);
}

/**
 * 根据 ID 获取单个案例
 */
export function getCaseById(id) {
  return cases.find(c => c.id === id);
}

/**
 * 根据类型筛选案例
 */
export function getCasesByType(type) {
  if (!type || type === 'all') return cases;
  return cases.filter(c => c.type === type);
}
