/* Theme preference: "auto" (follow system, default), "light" or "dark".
   Loaded synchronously in <head> so the saved choice applies before first paint. */
(function () {
  var KEY = 'theme';
  var root = document.documentElement;

  function read() {
    try { var v = localStorage.getItem(KEY); return v === 'light' || v === 'dark' ? v : 'auto'; } catch (e) { return 'auto'; }
  }
  function apply(mode) {
    if (mode === 'light' || mode === 'dark') root.setAttribute('data-theme', mode);
    else root.removeAttribute('data-theme');
    var buttons = document.querySelectorAll('[data-theme-choice]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', buttons[i].getAttribute('data-theme-choice') === mode ? 'true' : 'false');
    }
  }
  function save(mode) {
    try { if (mode === 'auto') localStorage.removeItem(KEY); else localStorage.setItem(KEY, mode); } catch (e) { }
  }

  apply(read()); // before first paint (buttons are synced again after DOM is ready)

  document.addEventListener('DOMContentLoaded', function () {
    apply(read());
    document.querySelectorAll('[data-theme-choice]').forEach(function (b) {
      b.addEventListener('click', function () {
        var mode = b.getAttribute('data-theme-choice');
        save(mode);
        apply(mode);
      });
    });
  });

  // Keep multiple open tabs in sync
  window.addEventListener('storage', function (e) { if (e.key === KEY) apply(read()); });
})();
