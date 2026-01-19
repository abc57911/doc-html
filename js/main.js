// Claude Code 使用指南 - jQuery 互動功能

// 全局導航標誌（防止導航時空狀態更新導致閃爍）
var isNavigatingToSection = false;

$(document).ready(function() {
  // 初始化所有功能
  initProgressBar();
  initBackToTop();
  initSearch();
  initFilterButtons();
  initDetailSections();
  initThemeToggle();
  initMobileMenu();
  initCopyButtons();
  initScrollSpy();
  initKeyboardNavigation();
  initSmoothScroll();
  initSidebarNavigation();
  addNoResultsMessage();

  // 初始化 highlight.js 語法高亮
  if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
  }

  // 簡化的語法高亮樣式
  initSimpleSyntaxHighlight();

  // 更新統計數量
  updateStats();

  console.log('Claude Code Guide Stats:', getStats());
});

// ===== 進度指示器 =====
function initProgressBar() {
  var $progressBar = $('<div>', { class: 'progress-bar' }).css('width', '0%');
  $('body').append($progressBar);

  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height() - $(window).height();
    var scrollPercent = (scrollTop / docHeight) * 100;
    $progressBar.css('width', scrollPercent + '%');
  });
}

// ===== 回頂部按鈕 =====
function initBackToTop() {
  var $backToTop = $('<button>', {
    class: 'back-to-top',
    title: '回到頂部'
  }).html('&#8593;');

  $('body').append($backToTop);

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 300) {
      $backToTop.addClass('visible');
    } else {
      $backToTop.removeClass('visible');
    }
  });

  $backToTop.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
}

// ===== 搜尋功能 =====
function initSearch() {
  var $searchInput = $('#searchInput');
  if ($searchInput.length === 0) return;

  $searchInput.on('input', debounce(function() {
    var query = $(this).val().toLowerCase().trim();
    searchContent(query);
    updateFilterButtonsState(query);
  }, 300));
}

function searchContent(query) {
  // 如果有搜尋內容，先清除篩選狀態並重置為「全部」
  if (query) {
    $('.filter-btn').removeClass('active');
    $('.filter-btn[data-filter="all"]').addClass('active');
  }

  $('.card').each(function() {
    var $card = $(this);
    var title = $card.find('.card-title').text().toLowerCase() || '';
    var description = $card.find('.card-description').text().toLowerCase() || '';
    var toolNames = $card.find('.tool-tag').map(function() {
      return $(this).text().toLowerCase();
    }).get().join(' ');

    var matches = !query || title.includes(query) || description.includes(query) || toolNames.includes(query);

    if (matches) {
      $card.show().removeClass('hidden').addClass('fade-in');
    } else {
      $card.hide().addClass('hidden').removeClass('fade-in');
    }
  });

  $('.detail-section').each(function() {
    var $section = $(this);
    var title = $section.find('h3').text().toLowerCase() || '';
    var headerDesc = $section.find('.header-desc').text().toLowerCase() || '';
    var content = $section.find('.detail-body').text().toLowerCase() || '';
    var matches = !query || title.includes(query) || headerDesc.includes(query) || content.includes(query);

    if (matches) {
      $section.show().removeClass('hidden');
    } else {
      $section.hide().addClass('hidden');
    }
  });

  // 篩選區塊（隱藏無內容的 section）
  filterSections(true);
}

function updateFilterButtonsState(query) {
  if (query) {
    $('.filter-btn').removeClass('active').removeClass('fade-in');
  }
}

// ===== 篩選按鈕 =====
function initFilterButtons() {
  // 處理 .filter-group (舊結構)
  $('.filter-group').each(function() {
    var $group = $(this);

    $group.find('.filter-btn').on('click', function() {
      var filter = $(this).data('filter');
      $group.find('.filter-btn').removeClass('active');
      $(this).addClass('active');
      filterContent(filter);
    });
  });

  // 處理 .filter-tabs (新結構 - top bar)
  $('.filter-tabs').each(function() {
    var $group = $(this);

    $group.find('.filter-tab').on('click', function() {
      var filter = $(this).data('filter');
      $group.find('.filter-tab').removeClass('active');
      $(this).addClass('active');
      filterContent(filter);
    });
  });
}

function filterContent(filter) {
  // 清除篩選：重置為全部顯示
  if (filter === 'clear') {
    $('#searchInput').val('');
    $('.filter-btn, .filter-tab').removeClass('active');
    $('.filter-btn[data-filter="all"], .filter-tab[data-filter="all"]').addClass('active');
    filter = 'all';
  }

  $('.card').each(function() {
    var $card = $(this);
    var type = $card.data('type');

    if (!filter || filter === 'all' || type === filter) {
      $card.show().removeClass('hidden').addClass('fade-in');
    } else {
      $card.hide().addClass('hidden').removeClass('fade-in');
    }
  });

  // 也過濾 detail-section (用於 MCP Tools)
  $('.detail-section').each(function() {
    var $section = $(this);
    var type = $section.data('type');

    if (!filter || filter === 'all' || type === filter) {
      $section.show().removeClass('hidden');
    } else {
      $section.hide().addClass('hidden');
    }
  });

  // 篩選對照表 section (只顯示 data-filter="all" 的 section)
  $('.section[data-filter]').each(function() {
    var $section = $(this);
    var sectionFilter = $section.data('filter');

    if (!filter || filter === 'all' || sectionFilter === filter) {
      $section.show().removeClass('hidden');
    } else {
      $section.hide().addClass('hidden');
    }
  });

  // 篩選側邊欄導航區塊
  $('.nav-section[data-filter]').each(function() {
    var $navSection = $(this);
    var navFilter = $navSection.data('filter');

    if (!filter || filter === 'all' || navFilter === filter) {
      $navSection.show();
    } else {
      $navSection.hide();
    }
  });

  // 篩選區塊（隱藏無內容的 section）
  filterSections(true);
}

// 篩選區塊（隱藏無內容的 section）
function filterSections(updateEmptyStateFlag) {
  $('.section').each(function() {
    var $section = $(this);
    var $visibleCards = $section.find('.card').not('.hidden');
    var $visibleSections = $section.find('.detail-section').not('.hidden');

    // 如果 section 本身沒有 card 或 detail-section（純文字說明區），則跳過不隱藏
    var hasAnyCards = $section.find('.card').length > 0;
    var hasAnyDetailSections = $section.find('.detail-section').length > 0;

    if (!hasAnyCards && !hasAnyDetailSections) {
      // 純文字區塊，跳過，保持顯示
      return;
    }

    // 有 card 或 detail-section 的區塊，才根據可見性判斷
    // 使用 .not('.hidden') 代替 :visible，避免 CSS display:none 衝突
    var hasVisibleCards = $visibleCards.length > 0;
    var hasVisibleSections = $visibleSections.length > 0;

    if (hasVisibleCards || hasVisibleSections) {
      $section.show();
    } else {
      $section.hide();
    }
  });

  // 只在非導航模式下更新空狀態
  if (updateEmptyStateFlag !== false) {
    updateEmptyState();
  }
}

// ===== 展開收合功能 =====
function initDetailSections() {
  $('.detail-header').on('click dblclick', function(e) {
    e.stopPropagation();
    $(this).closest('.detail-section').toggleClass('expanded');
  });
}

// ===== 主題切換 =====
function initThemeToggle() {
  var $themeToggle = $('#themeToggle');
  if ($themeToggle.length === 0) return;

  var savedTheme = localStorage.getItem('theme') || 'dark';
  $('html').attr('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  $themeToggle.on('click', function() {
    var currentTheme = $('html').attr('data-theme');
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    $('html').attr('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    showNotification('已切換至' + (newTheme === 'dark' ? '深色' : '淺色') + '主題', 'success');
  });
}

function updateThemeIcon(theme) {
  var $themeToggle = $('#themeToggle');
  if ($themeToggle.length > 0) {
    $themeToggle.find('.sun-icon').toggle(theme === 'light');
    $themeToggle.find('.moon-icon').toggle(theme === 'dark');
  }
}

// ===== 行動選單 =====
function initMobileMenu() {
  var $menuBtn = $('<button>', {
    class: 'mobile-menu-btn',
    title: '開啟選單'
  }).html('<span></span><span></span><span></span>');

  $('body').prepend($menuBtn);

  var $overlay = $('<div>', { class: 'overlay' });
  $('body').append($overlay);

  var $sidebar = $('.sidebar');

  $menuBtn.on('click', function() {
    $sidebar.toggleClass('open');
    $overlay.toggleClass('active');
    $menuBtn.toggleClass('active');
  });

  $overlay.on('click', function() {
    $sidebar.removeClass('open');
    $overlay.removeClass('active');
    $menuBtn.removeClass('active');
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      $sidebar.removeClass('open');
      $overlay.removeClass('active');
      $menuBtn.removeClass('active');
    }
  });
}

// ===== 複製程式碼功能 =====
function initCopyButtons() {
  $('.copy-btn').on('click', function() {
    var $btn = $(this);
    var $codeBlock = $btn.closest('.code-block');
    var $codeContent = $codeBlock.find('.code-content');
    var text = $codeContent.text();

    if (text) {
      navigator.clipboard.writeText(text).then(function() {
        var originalText = $btn.text();
        $btn.text('✓ 已複製').css('color', 'var(--accent-green)');

        setTimeout(function() {
          $btn.text(originalText).css('color', '');
        }, 2000);
      }).catch(function() {
        showNotification('複製失敗，請手動複製', 'error');
      });
    }
  });
}

// ===== 簡化語法高亮 =====
function initSimpleSyntaxHighlight() {
  $('.code-content').addClass('syntax-highlighted');
}

// ===== 捲動監控 =====
function initScrollSpy() {
  var $sections = $('.section');
  var $navLinks = $('.nav-link[data-target]');

  if ($sections.length === 0) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        $navLinks.removeClass('active');
        $navLinks.filter('[data-target="' + id + '"]').addClass('active');
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px' });

  $sections.each(function() {
    observer.observe(this);
  });
}

// ===== 鍵盤導航 =====
function initKeyboardNavigation() {
  $(document).on('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      e.preventDefault();
      $('#searchInput').focus().select();
    }

    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      $('#searchInput').focus().select();
    }
  });
}

// ===== 平滑捲動 =====
function initSmoothScroll() {
  $('a[href^="#"]').on('click', function(e) {
    var targetId = $(this).attr('href');
    if (targetId === '#') return;

    e.preventDefault();
    var $target = $(targetId);

    if ($target.length > 0) {
      var offsetTop = $target.offset().top - 80;
      $('html, body').animate({ scrollTop: offsetTop }, 400);

      $('.sidebar').removeClass('open');
      $('.overlay').removeClass('active');
    }
  });
}

// ===== 側邊欄導覽 =====
function initSidebarNavigation() {
  $('.nav-link[data-target]').on('click', function(e) {
    e.preventDefault();
    var targetId = $(this).data('target');
    var $target = $('#' + targetId);

    if ($target.length > 0) {
      // 設置導航標誌，防止空狀態更新導致閃爍
      isNavigatingToSection = true;

      // 檢查目標 section 是否被隱藏
      var wasHidden = $target.hasClass('hidden');
      var wasTempVisible = $target.hasClass('temp-visible');

      // 暫時移除 hidden 類別以計算正確位置
      if (wasHidden || wasTempVisible) {
        $target.removeClass('hidden temp-visible');
      }

      var offsetTop = $target.offset().top - 80;

      // 延遲恢復隱藏狀態，確保動畫開始後再隱藏
      setTimeout(function() {
        if (wasHidden) {
          $target.addClass('hidden');
        }
      }, 50);

      $('html, body').animate({ scrollTop: offsetTop }, 400, function() {
        // 動畫完成後，確保恢復隱藏狀態
        if (wasHidden) {
          $target.addClass('hidden');
        }
        // 重置導航標誌
        isNavigatingToSection = false;
      });

      // 更新 URL hash
      history.pushState(null, null, '#' + targetId);

      // 關閉行動裝置選單
      $('.sidebar').removeClass('open');
      $('.overlay').removeClass('active');
      $('.mobile-menu-btn').removeClass('active');
    }
  });
}

// ===== 空狀態訊息 =====
function addNoResultsMessage() {
  var $content = $('.content');
  if ($content.length === 0) return;

  var $emptyState = $('<div>', {
    id: 'noResults',
    class: 'empty-state hidden'
  });

  $emptyState.append($('<div>', { class: 'icon' }).text('🔍'));
  $emptyState.append($('<p>').text('沒有找到匹配的結果'));
  $emptyState.append($('<p>', { class: 'hint' }).text('嘗試不同的搜尋關鍵字或清除篩選條件'));

  var $firstSection = $content.find('.section');
  if ($firstSection.length > 0) {
    $emptyState.insertBefore($firstSection);
  } else {
    $content.append($emptyState);
  }
}

function updateEmptyState() {
  // 導航時跳過空狀態更新，防止閃爍
  if (isNavigatingToSection) return;

  var visibleCards = $('.card:not(.hidden)').length;
  var visibleSections = $('.detail-section:not(.hidden)').length;
  var $noResults = $('#noResults');

  if (visibleCards === 0 && visibleSections === 0 && $noResults.length > 0) {
    $noResults.removeClass('hidden');
  } else if ($noResults.length > 0) {
    $noResults.addClass('hidden');
  }
}

// ===== 工具函式 =====
function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    var args = arguments;
    var context = this;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function showNotification(message, type) {
  type = type || 'info';
  $('.notification').remove();

  var $notification = $('<div>', {
    class: 'notification notification-' + type
  }).text(message);

  $('body').append($notification);

  setTimeout(function() {
    $notification.css('animation', 'slideOutRight 0.3s ease');
    setTimeout(function() { $notification.remove(); }, 300);
  }, 3000);
}

// 更新統計顯示
function updateStats() {
  var agents = $('.card[data-type="agent"]').length;
  var skills = $('.card[data-type="skill"]').length;
  var tools = $('.card[data-type="tool"]').length + $('#mcp-tools .detail-section').length;
  var mcp = $('#mcp-tools .detail-section').length;

  $('#agent-count').text(agents);
  $('#skill-count').text(skills);
  $('#tool-count').text(tools);
  $('#mcp-count').text(mcp);
}

function getStats() {
  return {
    agents: $('.card[data-type="agent"]').length,
    skills: $('.card[data-type="skill"]').length,
    tools: $('.card[data-type="tool"]').length,
    favorites: (JSON.parse(localStorage.getItem('favorites') || '[]')).length
  };
}

// 導出全域函式
window.filterByType = filterContent;
window.showNotification = showNotification;
window.getStats = getStats;
window.updateStats = updateStats;
