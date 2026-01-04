// pages/admin/AdminLayout.jsx
import { Outlet, Link } from 'react-router-dom';
import PageEditor from './PageEditor.jsx'; // 👈 引入你的页面
// import Dashboard from './Dashboard.jsx';

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* 侧边栏导航 */}
      <aside>
        <Link to="/admin/pages/home">首页内容</Link>
        <Link to="/admin/users">用户管理</Link>
      </aside>

      {/* 子路由出口：PageEditor 等组件会在这里显示 */}
      <main>
        <Routes>
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="pages/:slug" element={<PageEditor />} /> {/* ← 关键！ */}
          {/* <Route path="users" element={<UserList />} /> */}
        </Routes>
      </main>
    </div>
  );
}
