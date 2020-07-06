import styled from 'styled-components';
import { FaMicrophone, FaHeadphones, FaCog } from 'react-icons/fa';

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: var(--gray);
  position: relative;
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    color: var(--white);
    font-size: 13px;
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  svg + svg {
    margin-left: 5px;
  }

  display: flex;
  align-items: center;
`;

export const MicIcon = styled(FaMicrophone)`
  width: 16px;
  height: 16px;

  color: var(--white);
  opacity: 0.7;

  cursor: pointer;

  transition: opacity 0.2;

  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(FaHeadphones)`
  width: 16px;
  height: 16px;

  color: var(--white);
  opacity: 0.7;

  cursor: pointer;

  transition: opacity 0.2;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(FaCog)`
  width: 16px;
  height: 16px;

  color: var(--white);
  opacity: 0.7;

  cursor: pointer;

  transition: opacity 0.2;

  &:hover {
    opacity: 1;
  }
`;
