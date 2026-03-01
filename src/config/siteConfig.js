const siteConfig = {
  siteTitle: "星辰科技",
  siteDescription: "用技术驱动未来创新",
  logo: "/logo-placeholder.png",
  navigation: [
    { label: "首页", path: "/" },
    { label: "案例", path: "/cases" },
    { label: "服务", path: "/services" },
    { label: "产品", path: "/products" },
    { label: "关于我们", path: "/about" },
    { label: "联系我们", path: "/contact" }
  ],
  pages: {
    home: [
      {
        type: "hero",
        data: {
          title: "引领数字化转型",
          subtitle: "我们提供高效、安全、可扩展的技术解决方案",
          ctaText: "立即咨询",
          ctaLink: "/contact",
          backgroundImage: "/hero-bg.jpg"
        }
      },
      {
        type: "cases",
        data: { limit: 4 }
      },
      {
        type: "features",
        data: {
          title: "我们的服务",
          items: [
            {
              icon: "⚡",
              title: "高性能架构",
              desc: "为高并发场景优化的系统架构"
            },
            {
              icon: "🔒",
              title: "数据安全",
              desc: "端到端加密，保障客户数据安全"
            },
            {
              icon: "📱",
              title: "全平台支持",
              desc: "Web、移动端、小程序一体化"
            }
          ]
        }
      },
      {
        type: "team",
        data: {
          title: "核心团队",
          members: [
            { name: "马岱", role: "CEO", avatar: "/avatar1.png" },
            { name: "马超", role: "CTO", avatar: "/avatar2.png" },
            { name: "马斯克", role: "CFO", avatar: "/avatar2.png" }
          ]
        }
      },
      {
        type: "contact",
        data: {
          title: "联系我们",
          subtitle: "有任何问题？欢迎随时咨询",
          email: "lizj12358@gmail.com",
          phone: "+86 138 **** ****",
          address: "广州市市越秀区天河路45号"
        }
      }
    ]
  },
  seo: {
    title: "星辰科技 - 企业官网",
    description: "星辰科技专注于企业级数字化解决方案",
    keywords: "企业官网, 数字化转型, 软件开发"
  }
};

export default siteConfig;
