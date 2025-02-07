import styled from 'styled-components';
import { FloatButton, Drawer, Button, Modal } from 'antd';

const GuestBookListWrapper = styled.section`
  & > div:first-of-type {
    align-self: flex-start;
    margin: 20px 0;
    & > div {
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      color: ${({ theme }) => theme.gray900};
    }
    & b {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const ListSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: calc(100vh-84px);
  & > div {
    margin-bottom: 12px;
  }
`;

const FloatingButton = styled(FloatButton)`
  width: 56px;
  height: 56px;
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px !important;
    height: 56px !important;
    margin: 0 !important;
  }
`;

const GuestBookDrawer = styled(Drawer)`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 390px !important;
  margin: auto;
  border-radius: 24px 24px 0 0;
  & div.ant-drawer-header {
    height: 72px;
    padding: 28px 20px;
    text-align: center;
    border: 0;
    & div.ant-drawer-header-title {
      justify-content: center;
      & button {
        order: 1;
        margin-right: 0;
      }
      & div {
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
        color: ${({ theme }) => theme.gray900};
      }
    }
  }
  & div.ant-drawer-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
      padding: 20px;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.gray200};
      border-radius: 16px;
    }
  }
`;

const BottomButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  margin-bottom: 35px;

  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
`;

const AlertModal = styled(Modal)`
  & div.ant-modal-content {
    width: 350px;
    height: 226px;
    padding: 28px 24px;
    margin: auto;
    border-radius: 16px;
  }
  & div.ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    height: 100%;
    text-align: center;
    & > div:first-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      margin: auto;
      background-color: #fff4ec;
      border-radius: 50%;
    }
    & > h2 {
      margin-top: 24px;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      color: ${({ theme }) => theme.gray950};
    }
  }
`;

const ModalButton = styled(Button)`
  height: 44px;
  margin-top: 32px;
  & p {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
  }
`;

const L = {
  GuestBookListWrapper,
  ListSection,
  FloatingButton,
  GuestBookDrawer,
  BottomButton,
  AlertModal,
  ModalButton,
};

export default L;
