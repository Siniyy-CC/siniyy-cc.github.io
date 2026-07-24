---
---
(function () {
  var posts = [
    {% for post in site.posts %}
    {
      title: {{ post.title | jsonify }},
      description: {{ post.description | default: post.excerpt | strip_html | normalize_whitespace | jsonify }},
      content: {{ post.content | strip_html | normalize_whitespace | jsonify }},
      tags: {{ post.tags | join: ' ' | jsonify }},
      rating: {{ post.rating | default: '未標示' | jsonify }},
      warnings: {{ post.warnings | default: '' | jsonify }},
      date: {{ post.date | date: '%Y年%-m月%-d日' | jsonify }},
      url: {{ post.url | relative_url | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  var form = document.getElementById('site-search');
  var input = document.getElementById('search-query');
  var status = document.getElementById('search-status');
  var results = document.getElementById('search-results');

  if (!form || !input || !status || !results) return;

  function escapeHTML(value) {
    return String(value).replace(/[&<>'"]/g, function (character) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character];
    });
  }

  function runSearch(query) {
    var normalized = query.trim().toLocaleLowerCase();
    results.innerHTML = '';

    if (!normalized) {
      status.textContent = '輸入關鍵字後即可搜尋。';
      return;
    }

    var matches = posts.filter(function (post) {
      return [post.title, post.description, post.content, post.tags, post.rating, post.warnings]
        .join(' ')
        .toLocaleLowerCase()
        .includes(normalized);
    });

    status.textContent = matches.length ? '找到 ' + matches.length + ' 篇文章。' : '沒有找到相關文章。';
    results.innerHTML = matches.map(function (post) {
      return '<li><time>' + escapeHTML(post.date) + '</time>' +
        '<a href="' + encodeURI(post.url) + '">' + escapeHTML(post.title) + '</a>' +
        '<span class="search-result-meta">【{{ site.pairing }}】 · 分級：' + escapeHTML(post.rating) + '</span>' +
        '<p>' + escapeHTML(post.description) + '</p></li>';
    }).join('');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var query = input.value;
    var url = new URL(window.location.href);
    if (query.trim()) url.searchParams.set('q', query.trim());
    else url.searchParams.delete('q');
    window.history.replaceState({}, '', url);
    runSearch(query);
  });

  input.addEventListener('input', function () {
    runSearch(input.value);
  });

  var initialQuery = new URLSearchParams(window.location.search).get('q') || '';
  input.value = initialQuery;
  runSearch(initialQuery);
})();
