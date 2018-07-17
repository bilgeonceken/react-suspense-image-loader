# react-suspense-image-loader

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

This component loads your images asynchronously using react suspense.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo


## Install

```bash
npm i react-suspense-image-loader
```



## Examples

You'll most likely define a spinner or a low resolution placeholder image while waiting for actual image to load. So I've prepared two examples for you to play with.

Bot are included in the demo

```bash
git clone https://github.com/bilgeonceken/ReactSuspenseImageLoader
cd ReactSuspenseImageLoader
npm install
npm start
```

<p align='left'> 
<img src="https://github.com/bilgeonceken/ReactSuspenseImageLoader/blob/master/code-spinner.png" width="65%">
</p>  
  
 <p align='left'> 
<img src="https://media.giphy.com/media/TgFi6GcyslRnUEe3RB/giphy.gif" width="200">
</p>

<p align='left'> 
<img src="https://github.com/bilgeonceken/ReactSuspenseImageLoader/blob/master/code-placeholder.png" width="60%">
</p>

<p align='left'> 
<img src="https://media.giphy.com/media/L15dTRr9F4nL4KhOuN/200w_d.gif" width="200">
</p>  
  

### Properties


Property | Type | Required | Description
:--- | :--- | :--- | :---
`src`|string|yes|Image URL|
`ms`|number|yes| Fallback delay (ms). Duration to wait for resource to load before rendering fallback component. For example if this is 500, that means i'll give it .5s for actual image to load and then render spinner in order to prevent flickering.
`width`|number|yes|Image width|
`height`|number|yes|Image height|
`fallback`|component|yes|Component to render while waiting for image image to load|
-----
