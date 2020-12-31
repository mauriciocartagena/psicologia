import styled from 'styled-components';
import { fadeIn } from '../../../../styles/animation';

export const Img = styled.img`
  ${fadeIn({ time: '2.5s' })}
  box-shadow:0 10px 14px rgba(0,0,0, .2);
  width:240vh;
  max-width:240px; 
  height:220vh; 
  max-height:220px;
  position:relative;
  justify-content:center;
  align-items:center;
`
