// 组件注入脚本：动态加载 header/footer HTML 片段，方便复用与统一维护
(function () {
  async function loadFragment(selector, url, fallbackHtml) {
    const container = document.querySelector(selector);
    if (!container) return;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('fetch failed');
      const html = await res.text();
      container.innerHTML = html;
    } catch (e) {
      // 回退到内嵌 HTML，保证即使在本地 file:// 打开也能显示
      container.innerHTML = fallbackHtml;
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadFragment('#site-header', '/components/header.html',
      '<header class="site-header" role="banner"><a class="brand" href="/">我的网站</a><nav><a href="/">首页</a><a href="contact.html">联系</a></nav></header>'
    );

    loadFragment('#site-footer', '/components/footer.html',
      '<footer class="site-footer" role="contentinfo">© 2026 · 我的个人网站</footer>'
    );

    // 兼容 index.html 中的占位 footer
    const ph = document.getElementById('site-footer-placeholder');
    if (ph && !document.getElementById('site-footer')) {
      ph.insertAdjacentHTML('afterend', '<footer class="site-footer" role="contentinfo">© 2026 · 我的个人网站</footer>');
    }
  });
})();
