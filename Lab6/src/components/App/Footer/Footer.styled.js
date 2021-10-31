import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    text-align: center;
    p { 
        color: 8E8E93;
        text-align: center;
        font-weight: 200;
    }
    h1 {
        margin-top: 10px;
    }
    span { 
        margin: 0 10px;
    }
`;

export const IconsWrapper = styled.div`
    margin: 10px 0;
`;

export const Icons = styled(Icon)`
    font-size: 24px;
    color: ${({color}) => color};
`;

export const Line = styled.hr`
    width: 75%;
    border-color: black;
    border-bottom: solid;
    border-top: solid;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.p`
    margin-top: 15px;
`
export const Image = styled.image`
  img {
    width: 70px;
    height: 70px;
    margin-left: 5px;
    margin-top: 10px;
  }
`