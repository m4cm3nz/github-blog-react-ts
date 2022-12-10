import styled from 'styled-components'

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 54rem;

  margin: auto;
  padding: 0 1.5rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 10.5rem;
  margin-top: calc(-11rem / 2);

  padding: 2rem 2.5rem 2rem 2.5rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['base-profile']};

  nav:first-of-type {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      text-transform: uppercase;
      text-decoration: none;

      font-weight: 700;
      font-size: 12px;
      line-height: 160%;

      color: ${(props) => props.theme['brand-blue']};

      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
        transition: 0.5s;
      }
    }
  }

  h2 {
    margin-bottom: 0.5rem;

    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  nav:last-of-type {
    display: inline-flex;
    gap: 1.5rem;

    a {
      color: ${(props) => props.theme['base-label']};

      text-decoration: none;

      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const Content = styled.article`
  width: 100%;
  padding: 2rem 2.5rem 2rem 2.5rem;

  font-weight: 400;
  font-size: 16px;
  line-height: 160%;

  a {
    color: ${(props) => props.theme['brand-blue']};
  }

  color: ${(props) => props.theme['base-text']};
`
