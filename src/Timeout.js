import React, { Fragment } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"

export function Timeout({ ms, fallback, children }) {
  return (
    <React.Timeout ms={ms}>
      {didTimeout => (
        <Fragment>
          <span hidden={didTimeout}>
            <CSSTransition
              in={!didTimeout}
              timeout={ms}
              classNames="fade"
              unmountOnExit
            >
              {children}
            </CSSTransition>
          </span>
          {didTimeout ? fallback : null}
        </Fragment>
      )}
    </React.Timeout>
  )
}

/*
<span hidden={didTimeout}>
            <CSSTransition
              in={!didTimeout}
              timeout={4000}
              classNames="fade"
              unmountOnExit
            >
              {children}
            </CSSTransition>
          </span>


 */
