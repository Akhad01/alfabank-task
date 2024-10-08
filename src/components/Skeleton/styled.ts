import styled from "styled-components";


export const Blocks = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;

    @keyframes attract-orange {
    to {
      transform: translateX(calc(var(--sz) + calc(var(--hm) / 4)));
    }
  }
  
  @keyframes attract-blue {
    to {
      transform: translateX(calc(var(--sz) * -1 - calc(var(--hm) / 4)));
    }
  }
`

export const BlockOrange = styled.div`
    --sz: 8vmin;
  --tX: 0;
  --animation: 700ms cubic-bezier(0.3, 0.5, 0.4, 0.9) infinite alternate-reverse;
  --hm: 4.5vmin;
  height: var(--sz);
  width: var(--sz);
  background-image: var(--bg);
  border-radius: 50%;
  transform: translateX(var(--tX));
  mix-blend-mode: lighten;

  --bg: linear-gradient(-50deg, #fbab7e 0%, #f7ce68 100%);
  margin-right: var(--hm);
  animation: attract-orange var(--animation);
`

export const BlockBlue = styled.div`
     --sz: 8vmin;
  --tX: 0;
  --animation: 700ms cubic-bezier(0.3, 0.5, 0.4, 0.9) infinite alternate-reverse;
  --hm: 4.5vmin;
  height: var(--sz);
  width: var(--sz);
  background-image: var(--bg);
  border-radius: 50%;
  transform: translateX(var(--tX));
  mix-blend-mode: lighten;

  --bg: linear-gradient(50deg, #00bfd5 0%, #c5f5ff 100%);
  margin-left: var(--hm);
  animation: attract-blue var(--animation);
`



