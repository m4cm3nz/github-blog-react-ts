import { PostContainer } from './styles'

interface PostProps {
  title: string
  content: string
  updatedAt: Date
}

export function Post(data: PostProps) {
  const { title, content, updatedAt } = data

  return (
    <PostContainer>
      <header>
        <h3>{title}</h3>
        <span>{updatedAt.toString()}</span>
      </header>
      <p>{content}</p>
    </PostContainer>
  )
}
