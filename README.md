# react-suspense-image-loader

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Describe react-suspense-image-loader here.

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

## Usage
```javascipt
npm i react-suspense-image-loader
```


<p align='left'> 
<img src="https://github.com/bilgeonceken/ReactSuspenseImageLoader/blob/master/code-spinner.png" width="70%">
</p>

<p align='left'> 
<img src="https://github.com/bilgeonceken/ReactSuspenseImageLoader/blob/master/code-placeholder.png" width="70%">
</p>



![Placeholder](https://media.giphy.com/media/L15dTRr9F4nL4KhOuN/200w_d.gif)

  
<img src="https://media.giphy.com/media/TgFi6GcyslRnUEe3RB/giphy.gif" width="200">


### Properties


Property | Type | Required | Description
:--- | :--- | :--- | :---
`src`|string|yes|Image URL|
`ms`|number|yes| Fallback delay (ms). Duration to wait for resource to load before rendering fallback component. 
`width`|number|yes|Image width|
`height`|number|yes|Image height|
`fallback`|component|yes|Component to render if the resource does not load before ms|
-----
