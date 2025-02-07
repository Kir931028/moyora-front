import styled from 'styled-components';
const FriendsListWrapper = styled.section`
  & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 20px 0 16px 0;
    & h1 {
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      color: ${({ theme }) => theme.gray900};
    }
    & h2 {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: ${({ theme }) => theme.primary};
    }
    & > div {
      width: 92px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
  }
`;

const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: calc(100vh - 120px);
  overflow: scroll;
  & > div {
    &:not(:first-of-type) {
      margin-top: 12px;
    }
    display: flex;
    align-items: center;
    width: 350px;
    height: 80px;
    padding: 18px 20px;
    background: #fff4ec;
    border-radius: 16px;
    cursor: pointer;
    & h3 {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${({ theme }) => theme.gray900};
    }
    & p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;

const F = {
  FriendsListWrapper,
  FriendsList,
};

export default F;
