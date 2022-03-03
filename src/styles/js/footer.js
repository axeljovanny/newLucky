import styled from "styled-components"
import { colors } from "../../utils/const"
import { above } from "./index"


export const StyledFooter = styled.div`
  display: flex;
  width: 100vw;
  background: ${colors.none};
  ${above.medium`
      
  `}
  ${above.large`
  height: 60vh;
  width: 100vw;
  `}
`
export const FooterText = styled.div`
  display: flex;
  width: 100vw;
  flex-flow: column wrap;
  background: ${colors.darkBlue};
  padding-left: 0;
  ${above.medium`
      
  `}
  ${above.large`
  height: 60vh;
  width: 70vw;
  padding-left: 10%;
  `}
`
export const FooterImage = styled.div`
  display:flex;
  width: 100vw;
  background: ${colors.darkBlue};

  ${above.medium`
      
  `}
  ${above.large`
  width: 30vw;
  `}
`
export const FooterContact = styled.div`
  display: flex;
  width: 100%;
  background: ${colors.darkBlue};
  ${above.medium`
      
  `}
  ${above.large`
  height: 60%;
  `}
`
export const FooterSocial = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  background: ${colors.darkBlue};
  ${above.medium`
      
  `}
  ${above.large`
  width: 80%;
  height: 40%;
  `}
`

export const Text = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column wrap;
  justify-content: center;
  transform: translateX(8vw);
  background: ${colors.none};
  width: 100%;
  color: ${colors.white};


  ${above.medium`
      
  `}
  ${above.large`
  flex-flow: column wrap;
  width: 50%;
  justify-content: center;

  `}
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.none};
  width: 15%;

  a{
  color: ${colors.white};
  }
  ${above.medium`
      
  `}
  ${above.large`

  `}
`