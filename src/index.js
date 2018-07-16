import React from "react"
import { withCache } from "./withCache"
import { createResource } from "simple-cache-provider"
import { Timeout } from "./Timeout"
import "./styles.css"

const getImage = createResource(src => {
  const image = new Image()
  return new Promise((res, rej) => {
    image.onload = () => setTimeout(() => res(src), 2000)
    image.src = src
  })
})

const Img = withCache(props => {
  const src = getImage(props.cache, props.src)
  return <img src={src} alt="" height={props.height} width={props.width} />
})

export function SuspendedImage(props) {
  return (
    <React.unstable_AsyncMode>
      <Timeout ms={props.ms} fallback={props.fallback}>
        <Img src={props.src} height={props.height} width={props.width} />
      </Timeout>
    </React.unstable_AsyncMode>
  )
}
export default SuspendedImage
