/**
 * Injeta os estilos do HTML legado (armazenados em <style type="text/plain">)
 * em um <style> real dentro da <head>.
 */
(function legacyCssLoader() {
  const ids = ["legacy-style-main", "legacy-style-modal"];

  ids.forEach((id) => {
    const src = document.getElementById(id);
    if (!src) return;

    const css = src.textContent || "";
    const styleEl = document.createElement("style");
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    // Remove o container original para reduzir clutter no DOM.
    try {
      src.remove();
    } catch (e) {
      // ignore
    }
  });
})();

