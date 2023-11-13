# Learning goals

1. Learn TailwindCSS
2. Use Layout components

# Steps
0. pre-req: start from basic webpack starter
1. npm install --save-dev tailwindcss css-loader style-loader postcss-loader 
   css-loader style-loader - basic webpack css workflow
   tailwindcss - main package
   postcss-cli / postcss-loader - this plugin to webpack has a tailwindcss plugin to invoke tailwind css processing
2. npx tailwind init tailwind.config.js
3. create postcss.config.js
5. update webpack.common.js