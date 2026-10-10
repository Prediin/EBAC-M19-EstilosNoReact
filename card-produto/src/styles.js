import styled, { createGlobalStyle } from 'styled-components'

const EstilosGlobais = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: Arial, sans-serif;
    background: #f1f5f9;
    color: #0f172a;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }
`

export const Pagina = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px 16px;

  @media (min-width: 640px) {
    padding: 40px 24px;
  }

  @media (min-width: 768px) {
    padding: 48px 32px;
  }

  @media (min-width: 1024px) {
    padding: 56px 48px;
  }

  @media (min-width: 1280px) {
    padding: 64px;
  }

  @media (min-width: 1536px) {
    padding: 72px;
  }
`

export default EstilosGlobais
