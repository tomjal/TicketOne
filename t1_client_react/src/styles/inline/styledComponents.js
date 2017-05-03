import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const blackTheme = {
  main: 'black',
};

export const StyleTheme = (props) => {
  return (
    <ThemeProvider theme={blackTheme}>
      {props.children}
    </ThemeProvider>
  );
}

/*
* === Layouts ===
*/
export const FlexRowLayoutStyle = styled.div`
`;

export const TwoColumnsFlexStyle = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  & > div:nth-of-type(1) {
    flex: 1 1 500px;
  }
  & > div:nth-of-type(2) {
    flex: 1 1 500px;
  }
`;

/*
* === Main app ===
*/
export const AppStyle = styled.div`
`;

export const AppHeaderStyle = styled.div`
`;

export const AppContentStyle = styled.div`
`;

export const AppFooterStyle = styled.div`
`;

/*
* === Widgets ===
*/
export const GenericWidgetStyle = styled.div`
`;

export const PopupWidgetStyle = styled.div`
`;

export const LoginWidgetStyle = styled.div`
`;

/*
* === Chatroom elements ===
*/
export const ChatWidgetStyle = styled.div`
`;

export const ChatListStyle = styled.div`
`;

export const ChatListStyle = styled.div`
`;

export const ChatBubbleStyle = styled.div`
`;
