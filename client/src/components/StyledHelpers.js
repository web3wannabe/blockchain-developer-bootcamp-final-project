import styled from 'styled-components';
import { colors } from '../theme';

export const StyledHeaderBox = styled.div`
  display: flex;
  background: #1f1f1f;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
  border: 1px solid ${colors.blue};
  padding: 10px;
  border-radius: 5px;
  height: 50px;
`;
