/**
 * Executa o JS legado que foi movido para um bloco <script type="text/plain">.
 * Mantém compatibilidade com chamadas via onclick (funções no escopo global).
 */
(function legacyLoader() {
  const el = document.getElementById('legacy-script');
  if (!el) return;

  const code = el.textContent || '';

  // Executa no escopo global para que function declarations e variáveis "vazem"
  // e continuem funcionando com atributos onclick="...".
  window.eval(code);

  // Opcional: remove para evitar re-execução e reduzir tamanho do DOM.
  try {
    el.parentNode && el.parentNode.removeChild(el);
  } catch (e) {
    // ignore
  }
})();

