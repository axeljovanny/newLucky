import styled from "styled-components"
import { colors } from "../../utils/const"
import { above } from "./index"


export const StyledServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column ;
  background: ${colors.softWhite};
  height: 100vh;
  width: 100vw;
  ${above.medium`
      
  `}
  ${above.large`
  `}
`

export const TittleServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.softWhite};
  height: 10%;
  width: 100vw;

  h2{
    padding-left: 0;
  }

  ${above.medium`
      
  `}
  ${above.large`
  justify-content: flex-start;

  h2{
    padding-left: 10%;
  }
  `}
`
export const TextServices = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.softWhite};
  height: 80%;
  width: 100vw;
  padding-left: 0;
  gap: 10px;
  flex-flow: row wrap;


  ${above.medium`
      
  `}
  ${above.large`
  padding: 0, 10%;


  `}
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  justify-content: center;
  background: ${colors.none};
  width: 100%;

  ${above.medium`
      
  `}
  ${above.large`
  height: 50%;
  width: 30%;
  justify-content: center;

  `}
`
