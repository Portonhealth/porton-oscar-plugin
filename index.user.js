
// ==UserScript==
// @name        Porton Health Corp Oscar Plugin
// @namespace   Violentmonkey Scripts
// @description This is a userscript.
// @match       *://*oscar*/*
// @version     1.0.1
// @author      Porton Health Corp
// @require     https://cdn.jsdelivr.net/combine/npm/@violentmonkey/dom@2,npm/@violentmonkey/ui@0.7
// @require     https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js
// @require     https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js
// @require     https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js
// @require     https://unpkg.com/react@18/umd/react.production.min.js
// @require     https://unpkg.com/react-dom@18/umd/react-dom.production.min.js
// @downloadURL https://github.com/Portonhealth/porton-oscar-plugin/raw/master/index.user.js
// @grant       GM_addElement
// @grant       GM_addStyle
// ==/UserScript==

(function () {
'use strict';

function App() {
  // create div with 'root' as id
  const reactNode = document.createElement('div');
  reactNode.id = 'root';
  reactNode.setAttribute('style', 'position: fixed; right: 20px; bottom: 20px');
  document.body.append(reactNode);

  // import react script
  const scriptEl = document.createElement('script');
  scriptEl.src = 'https://porton-shared.s3.ca-central-1.amazonaws.com/PortonOscar.js';
  // 'https://localhost:9000/PortonOscar.js';
  scriptEl.onload = () => {
    const loadedScript = document.defaultView['PortonOscar'];
    if (loadedScript) {
      console.log('Script Loaded');
      loadedScript.widgetExports.renderToDOM({
        domId: 'root'
      });
    }
  };
  document.head.append(scriptEl);
  return VM.h("div", null);
}
VM.getPanel({
  content: VM.h(App, null)
});

})();
