(function () {
  var root = document.documentElement, btn = document.getElementById('themeBtn');
  try { var s = localStorage.getItem('theme'); if (s) root.setAttribute('data-theme', s); } catch (e) {}
  function cur() { return root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
  function label() { btn.textContent = cur() === 'dark' ? btn.dataset.light : btn.dataset.dark; }
  btn.addEventListener('click', function () {
    var n = cur() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', n);
    try { localStorage.setItem('theme', n); } catch (e) {}
    label();
  });
  label();
})();
