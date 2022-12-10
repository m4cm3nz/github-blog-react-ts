import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Content, Header, PostContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../lib/api'
import { useEffect, useState } from 'react'

interface Issue {
  title: string
  body: string
  htmlUrl: string
  userLogin: string
  userHtmlUrl: string
  comments: number
  age: string
}

export function Post() {
  const { number } = useParams()

  const [issue, setIssue] = useState<Issue>({
    title: '',
    body: '',
    htmlUrl: '',
    userLogin: 'm4cm3nz',
    userHtmlUrl: '',
    comments: 0,
    age: 'now',
  })

  async function loadIssue() {
    const response = await api.get(
      `repos/m4cm3nz/github-blog-react-ts/issues/${number}`,
    )

    const issue = {
      title: response.data.title,
      body: response.data.body,
      htmlUrl: response.data.html_url,
      userLogin: response.data.user.login,
      userHtmlUrl: response.data.user.html_url,
      comments: response.data.comments,
      age: formatDistanceToNow(new Date(response.data.updated_at), {
        locale: ptBR,
        addSuffix: true,
      }),
    }

    setIssue(issue)
  }

  useEffect(() => {
    loadIssue()
  }, [])

  return (
    <PostContainer>
      <Header>
        <nav>
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </NavLink>
          <a href={issue.htmlUrl} target="_blank" rel="noopener noreferrer">
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </nav>
        <h2>{issue?.title}</h2>
        <nav>
          <a href={issue.userHtmlUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            {issue.userLogin}
          </a>
          <a href={issue.htmlUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCalendarDay} />
            {issue.age}
          </a>
          <a href={issue.htmlUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faComment} />
            {issue.comments} comentários
          </a>
        </nav>
      </Header>
      <Content>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, style, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={coldarkDark}
                  language={match[1]}
                  PreTag="div"
                  showLineNumbers={true}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {issue.body}
        </ReactMarkdown>
      </Content>
    </PostContainer>
  )
}
