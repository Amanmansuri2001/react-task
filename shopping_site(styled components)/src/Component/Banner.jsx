import React from 'react'
import styled from 'styled-components'

function Banner({img}) {
    const Wrapper = styled.div`
    height: 600px;
    margin: 10px 10px;
    width: 100%;
    // background: silver;
    display: flex;
    justify-content: center;
    cursor: pointer;
  `;
  const CardBody = styled.div`
    font-size: 1.1rem;
    width: 100%;
    & img {
      width: 100%;
      height: 100%;
      mix-blend-mode: color-burn;
    }
  `;
  return (
    <Wrapper>
    <CardBody>
      <img
        src= {img}
        alt=""
      />
    </CardBody>
  </Wrapper>
  )
}

export default Banner