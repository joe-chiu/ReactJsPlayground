React from scratch based on my personal preference on what is "essential"

I want to build a client only app to test out UI component library with no server side logic. 
I plan to mock all data.

 - typescript
 - webpack / esbuild
 - assume targeting latest browsers, not worry about browser compact
 - assume running with LTS node / npm

# react, typescript, webpack
0. pre-req: node
1. create and use project folder
2. npm init
3. npm install react react-dom
4. npm install --save-dev typescript @types/node @types/react @types/react-dom 
5. npm install --save-dev webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin webpack-dev-server ts-loader
   webpack: react itself can run from CDN, but libraries like fluentui needs a bundler to work, typescript also needs transpiling
   webpack-dev-server: need a server that could serve bundled results also do watch / live reload
   ts-loader, html-webpack-plugin: needs these to correctly bundle a working site
6. create tsconfig.json
7. create webpack.common.js, webpack.development.js
8. if using git source control, should have a .gitignore that exclude build and node_modules folders