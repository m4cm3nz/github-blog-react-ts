import styled from 'styled-components'

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 54rem;

  margin: auto;
  padding: 0 1.5rem;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  width: 100%;
  height: 13.25rem;

  margin-top: calc(-11rem / 2);
  margin-bottom: 4.5rem;
  padding: 2rem 2.5rem 2rem 2.5rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['base-profile']};

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  & div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

    p {
      margin-bottom: 1.5rem;

      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Bio = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const ProfileHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 0.5rem;
  padding-top: 0.5rem;

  h5 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    height: 1.1875rem;

    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
    text-decoration: none;

    color: ${(props) => props.theme['brand-blue']};

    svg {
      font-size: 0.8rem;
    }

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
      transition: 0.5s;
    }
  }
`

export const NavigationLinks = styled.nav`
  display: inline-flex;
  gap: 1.5rem;

  a {
    color: ${(props) => props.theme['base-label']};

    text-decoration: none;

    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const InputContainer = styled.div`
  display: inline;
  width: 100%;

  margin-bottom: 3rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.9375rem;

    span {
      font-size: 0.875rem;
      line-height: 160%;
      text-align: right;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem 0.75rem 1rem;

    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 1px ${(props) => props.theme['brand-blue']};
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Posts = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  padding-bottom: 8rem;

  gap: 2rem;

  list-style: none;
`
