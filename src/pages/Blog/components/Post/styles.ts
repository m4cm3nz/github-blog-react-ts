import styled from 'styled-components'

export const Article = styled.article`
  padding: 2rem;
  border-radius: 10px;

  width: 24.5rem;
  height: 16.25rem;

  header {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.25rem;

    h3 {
      width: 17rem;

      font-weight: 700;
      font-size: 1.25rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      flex: 1;
      text-align: right;

      margin-top: 0.3125rem;

      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  background: ${(props) => props.theme['base-post']};
`
