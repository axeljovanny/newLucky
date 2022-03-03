import styled from "styled-components"
import { colors } from "../../utils/const"
import { above } from "./index"


export const StyledAbout = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(4, 1fr); 
  grid-column-gap: 0px;
  grid-row-gap: 0px;   
  width: 100vw;
  background: ${colors.darkBlue};
  ${above.medium`
      
  `}
  ${above.large`
  height: 100vh;
  width: 100vw;
  `}
`


export const AboutTittle = styled.div`
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  grid-area: 1 / 1 / 2 / 3;
  width: 100vw;

  h2{
    color:${colors.white};
  }
  h3{
    color:${colors.white};
  }


  ${above.medium`
      
  `}
  ${above.large`
  grid-area: 1 / 1 / 2 / 2;
  width: 50vw;

  
  `}
`

export const AboutText = styled.div`
display: flex;
justify-content: center;
align-items: center;
grid-area: 3 / 1 / 4 / 3;
width: 100vw;

h4{
  width: 80%;
  text-align: justify;
  color: ${colors.white};

}

  ${above.medium`
      
  `}
  ${above.large`
  
  grid-area: 1 / 2 / 5 / 3; 
  width: 50vw;

  
  `}
`

export const AboutImg1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
grid-area: 2 / 1 / 3 / 3;
transform: translate(0);

width: 100vw;

  ${above.medium`
      
  `}
  ${above.large`
  transform: translate(-20%);

  grid-area: 2 / 1 / 5 / 2;
  width: 50vw;

  
  `}

`
export const AboutImgDiv2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
transform: translate(0);
grid-area: 4 / 1 / 5 / 3;
width: 100vw;

  ${above.medium`
      
  `}
  ${above.large`
  transform: translate(20%, -20%);
  grid-area: 2 / 1 / 5 / 2;
  width: 50vw;

  
  `}
`
export const AboutImgDiv3 = styled.div`
  display:none;

  ${above.medium`
      
  `}
  ${above.large`

  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(20%, 10%);

  grid-area: 2 / 1 / 5 / 2;
  width: 50vw;

  
  `}
`