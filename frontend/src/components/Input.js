import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;

  padding: 0 16px;

  border: 2px solid #FFF;
  border-radius: 4px;
  outline: none;

  background: ${({ theme }) => theme.colors.inputBackground};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  font-size: 16px;

  transition: all .2s ease-in;

  appearance: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    transition: all .2s ease-in;
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}

  &[disabled]{
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
