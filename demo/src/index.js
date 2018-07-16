import React, { Component } from "react"
import { render } from "react-dom"
import { Spin } from "antd"
import "antd/dist/antd.css"
import plc from "./plc.jpg"
import "./styles.css"

const styles = {
  height: "900px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between"
}
import SuspenseImageLoader from "../../src"

class Demo extends Component {
  render() {
    return (
      <div style={styles}>
        <SuspenseImageLoader
          src="https://picsum.photos/4020"
          height={400}
          width={400}
          ms={1000}
          fallback={
            <Spin size="large" style={{ width: "400px" }}>
              <div
                style={{
                  height: "400px",
                  width: "400px"
                }}
              />
            </Spin>
          }
        />
        <SuspenseImageLoader
          src="https://picsum.photos/200"
          height={400}
          width={400}
          ms={1000}
          fallback={
            <img alt="" height={400} width={400} className="out" src={plc} />
          }
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector("#demo"))
