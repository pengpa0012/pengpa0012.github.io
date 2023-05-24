import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head';

import './global.css';

export default component$(() => {
  /*
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  const analyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', '');
  gtag('config', '');
`;
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-59EYNYXNMS"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={analyticsScript}></script>
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <script>
          AOS.init();
        </script>
      </body>
    </QwikCityProvider>
  );
});
