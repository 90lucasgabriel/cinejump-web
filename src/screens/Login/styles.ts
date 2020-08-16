import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    input {
      background: #fff;
      color: #0079b2;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      &::placeholder {
        color: #666360;
      }
      & + input {
        margin-top: 8px;
      }
    }
    button {
      background: #0079b2;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #f2f2f2;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-colors 0.2s;
      &:hover {
        background: ${shade(0.2, '#0079b2')};
      }
    }
  }
  a {
    color: #0079b2;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#0079b2')};
    }
  }
  > a {
    color: #0079b2;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#0079b2')};
    }
  }
`;
