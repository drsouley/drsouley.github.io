// Simple client-side search over /search.json
// Usage: <input id="search-input"> + <ul id="search-results"></ul>
(function () {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  let index = [];

  fetch('/search.json')
    .then((res) => res.json())
    .then((data) => { index = data; });

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = '';
    if (!q) return;

    const matches = index.filter((item) =>
      item.title.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q)
    ).slice(0, 10);

    matches.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'py-3 border-b border-outline-variant';
      li.innerHTML = `<a href="${item.url}" class="font-semibold hover:underline">${item.title}</a>
                      <span class="block text-sm text-on-surface-variant">${item.date}</span>`;
      results.appendChild(li);
    });
  });
})();
