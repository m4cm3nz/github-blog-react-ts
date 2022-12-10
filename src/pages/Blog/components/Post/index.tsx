import { NavLink } from 'react-router-dom'
import { Article } from './styles'

interface Issue {
  number: number
  title: string
  body: string
  age: Date
}

interface PostProps {
  issue: Issue
}

export function Post({ issue }: PostProps) {
  const { title, body, age: updatedAt, number } = issue

  return (
    <NavLink
      to={`/issue/${number}`}
      title="my cart"
      style={{ textDecoration: 'none' }}
    >
      <Article>
        <header>
          <h3>{title}</h3>
          <span>{updatedAt.toString()}</span>
        </header>
        <p>{body}</p>
      </Article>
    </NavLink>
  )
}
