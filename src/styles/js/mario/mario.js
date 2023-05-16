import styled from "styled-components"
import { colors} from "../../../utils/const"
import { above } from "../index"

export const ContenedorPrincipal = styled.div`
    background: red;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    align-items: center;
  ${above.medium`
  `}
  ${above.large`

  `}
`

export const ContenedorCentro = styled.div`
background: aqua;
height: 70%;
width: 50%;
display:flex;
justify-content: flex-end;
align-items: center;
${above.medium`
  `}
  ${above.large`

  `}
`

export const ContenedorDerecha = styled.div`
background: green;
height: 100%;
width: 50%;
display:flex;
justify-content: center;
align-items: center;
${above.medium`
  `}
  ${above.large`

  `}
`