import React, { useState, useEffect } from 'react'

import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Sipn = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1003;
  background: #fff;
  overflow: hidden;

  & > div:first-child {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    box-shadow: 0 3px 3px 0 rgba(255, 56, 106, 1);
    transform: translate3d(0, 0, 0);
    animation: ${rotate} 2s linear infinite;
  }
  & > div:first-child:after,
  & > div:first-child:before {
    content: '';
    position: absolute;
    border-radius: 50%;
  }
  & > div:first-child:before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    box-shadow: 0 3px 3px 0 rgb(255, 228, 32);
    -webkit-animation: ${rotate} 3s linear infinite;
    animation: ${rotate} 3s linear infinite;
  }
  & > div:first-child:after {
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    box-shadow: 0 3px 3px 0 rgba(61, 175, 255, 1);
    animation: ${rotate} 1.5s linear infinite;
  }

  .cusLoading {
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */
export default function Loader({ size = '16px', stroke, ...rest }: { size?: string; stroke?: string }) {
  // const [show, setShow] = useState(false)

  // useEffect(() => {
  //   const timeout = setTimeout(() => setShow(true), 100)
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [])

  return (
    <>
      <Sipn>
        <div />
          <img className="cusLoading" src="/images/logo.png?v=3" alt="..." width="100%" />
      </Sipn>

    </>
  )
}
