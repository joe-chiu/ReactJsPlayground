# Learning goals

1. Use FluentUI 2 (v9) to build out web UI 
2. Learn TailwindCSS
3. Setup things like webpack tree shaking, try differnt bundle analyzer, etc.

# Steps
0. pre-req: start from react + tailwindcss starter
1. npm install --save-dev @fluentui/react-components @fluentui/react-icons @fluentui-contrib/react-chat  

# Notes
 create bundle info: npx webpack --config webpack.production.js --profile --json > stats.json
 visualize bundle info: npx webpack-bundle-analyzer stats.json build
 https://chrisbateman.github.io/webpack-visualizer/

 # Todo
 compose tool buttons, rich/simple compose, reaction, chat list menu, settings, channel view
 activity view, calendar (data grid)