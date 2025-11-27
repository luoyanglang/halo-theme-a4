/**
 * A4 Theme - Main JavaScript
 */

(function() {
  'use strict';

  // 初始化
  document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    initTools();
    initEmailLinks();
  });

  /**
   * 暗黑模式
   */
  function initDarkMode() {
    const toggle = document.querySelector('.dark-mode-toggle');
    if (!toggle) return;

    // 读取保存的偏好
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      document.body.classList.add('dark-mode');
    }

    // 切换事件
    toggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
    });
  }

  /**
   * 工具按钮
   */
  function initTools() {
    // 回到顶部
    const returnToTop = document.querySelector('.return-to-top');
    if (returnToTop) {
      returnToTop.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // 滚动时显示/隐藏
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          returnToTop.style.display = 'flex';
        } else {
          returnToTop.style.display = 'none';
        }
      });

      // 初始隐藏
      returnToTop.style.display = 'none';
    }

    // 回退页面
    const returnToLast = document.querySelector('.return-to-last');
    if (returnToLast) {
      returnToLast.addEventListener('click', function() {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = '/';
        }
      });
    }
  }

  /**
   * 邮箱链接自动化
   */
  function initEmailLinks() {
    const emailPattern = /Email:\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    
    document.querySelectorAll('.index-footer, .post-footer').forEach(function(element) {
      const text = element.innerHTML;
      const newText = text.replace(emailPattern, function(match, email) {
        return 'Email: <a href="mailto:' + email + '">' + email + '</a>';
      });
      if (newText !== text) {
        element.innerHTML = newText;
      }
    });
  }

  /**
   * 平滑滚动
   */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

})();
