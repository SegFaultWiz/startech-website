// pages/admin/PageEditor.jsx
import { useState, useEffect } from 'react';

export default function PageEditor() {
  const [content, setContent] = useState({});

  useEffect(() => {
    // 从后端加载当前页面配置
    fetch('/api/pages/home')
      .then(res => res.json())
      .then(data => setContent(data));
  }, []);

  const save = () => {
    fetch('/api/pages/home', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    });
  };

  return (
    <div>
      <h2>首页内容编辑</h2>
      {/* 可视化编辑器（如 Quill、Draft.js） */}
      <button onClick={save}>保存</button>
    </div>
  );
}
