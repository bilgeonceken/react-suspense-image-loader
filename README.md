# react-suspense-image-loader

[![npm package][npm-badge]][npm]

This component loads your images asynchronously using react suspense.
For animations [react-transition-group](https://github.com/reactjs/react-transition-group) is used and can be customized easily.

[npm-badge]: https://img.shields.io/npm/v/react-suspense-image-loader.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-suspense-image-loader

[![Edit test-Imported-SuspendedImage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/9z74q1lm14)


## Install

```bash
npm i react-suspense-image-loader
```

## Usage

```javascript
import React from "react"
import ReactDOM from "react-dom"
import Spinner from "./Spinner"
import SuspenseImageLoader from "react-suspense-image-loader"

function App() {
  return (
    <div>
      <SuspenseImageLoader
        src="https://picsum.photos/4101"
        height={400}
        width={400}
        ms={800}
        fallback={<Spinner />} // any spinner you like
      />
    </div>
  )
}

ReactDOM.render(<App history={history} />, document.getElementById("root"))
```

## Examples

You'll most likely define a spinner or a low resolution placeholder image while waiting for actual image to load. So I've prepared two examples for you to play with.

Both are included in the demo:

```bash
git clone https://github.com/bilgeonceken/ReactSuspenseImageLoader
cd ReactSuspenseImageLoader
npm install
npm start
```

<p align='left'>
<img src="https://raw.githubusercontent.com/bilgeonceken/ReactSuspenseImageLoader/master/code-spinner.png" width="65%">
</p>  

 <p align='left'>
<img src="https://media.giphy.com/media/TgFi6GcyslRnUEe3RB/giphy.gif" width="200">
</p>

<p align='left'>
<img src="https://raw.githubusercontent.com/bilgeonceken/ReactSuspenseImageLoader/master/code-placeholder.png" width="60%">
</p>

<p align='left'>
<img src="https://media.giphy.com/media/L15dTRr9F4nL4KhOuN/200w_d.gif" width="200">
</p>  

### Properties

| Property   | Type      | Required | Description                                                                                                                                                                                                                              |
| :--------- | :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`      | string    | yes      | Image URL                                                                                                                                                                                                                                |
| `ms`       | number    | yes      | Fallback delay (ms). Duration to wait for resource to load before rendering fallback component. For example if this is 500, that means i'll give it .5s for actual image to load and then render spinner in order to prevent flickering. |
| `width`    | number    | yes      | Image width                                                                                                                                                                                                                              |
| `height`   | number    | yes      | Image height                                                                                                                                                                                                                             |
| `fallback` | component | yes      | Component to render while waiting for image image to load                                                                                                                                                                                |

---
