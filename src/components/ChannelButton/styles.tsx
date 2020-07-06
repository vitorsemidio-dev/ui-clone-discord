import styled from 'styled-components';
import { FaHashtag, FaUserPlus, FaCog } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 5px 3px;

  border-radius: 5px;
  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover,
  &.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }
  }

  svg + svg {
    margin-left: 5px;
  }
`;

export const HashTagIcon = styled(FaHashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(FaUserPlus)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(FaCog)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;
