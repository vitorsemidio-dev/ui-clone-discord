import styled from 'styled-components';
import { FaHashtag } from 'react-icons/fa';

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

  z-index: 2;
`;

export const HashTagIcon = styled(FaHashtag)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;

export const Title = styled.div`
  margin-left: 9px;

  color: var(--white);
  font-size: 16px;
  font-weight: bold;
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  background-color: var(--white);
  opacity: 0.2;
  margin: 0 13px;
`;

export const Description = styled.div`
  font-size: 15px;
  color: var(--gray);
`;
