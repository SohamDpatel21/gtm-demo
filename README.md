# gtm-demo
Simple implementation of basic tracking using GTM

To access the application click on this link https://defabius.github.io/gtm-demo/

or scan the following QR code

<a rel='nofollow' href='http://www.qrcode-generator.de' border='0' style='cursor:default'><img src='https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fdefabius.github.io%2Fgtm-demo%2F&chs=180x180&choe=UTF-8&chld=L|2' alt=''></a>

# Table of contents
1. [How to integrate GTM in the page](#integration)

## How to integrate GTM in the page<a name="integration"></a>

Integration is pretty straightforward and can be done in 3 easy steps.

1. Link GTM library in the HEAD tag of your page
  ```
  <head>
    <title>...</title>
    <meta>...</meta>
    ...

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','YOUR-GTM-CONTAINER-ID');</script>
    <!-- End Google Tag Manager -->

  </head>
  ```
2. Include the fallback iframe for browser where javascript is disabled in the BODY
  ```
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=YOUR-GTM-CONTAINER-ID"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    ...
  </body>
  ```
  Probably this second step is not even necessary because realistically the web application won't probably work without javascript. In case you want to include this snippet anyway, remember to include it immediately after the opening of the body tag.
3. Initialize the data layer by creating an array in the global scope named dataLayer
  ```
  <head>
    ...
    <script>
      dataLayer = [];
    </script>
    
	  <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': ...
    ...
  </head>
  ```
  This simple script need to be executed before loading the GTM library in the HEAD of the page.
  
Notice that the snippets in steps 1 and 2 can be copied from the GTM page with the container id already setup. They are conveniently offered after creating a new container, but they can be found also in the admin section whenever you need them.
![GTM installation step 1](https://github.com/deFabius/gtm-demo/blob/master/docs/gtm-install-step1.png)
![GTM installation step 2](https://github.com/deFabius/gtm-demo/blob/master/docs/gtm-install-step2.png)
