import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Content, Header, PostContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

const markdown = `
# DT Money
\n&nbsp;
## Simple income/outcome app
Project 03 - Rocketseat Ignite ReactJS Path
\n&nbsp;

Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
\n &nbsp;
\`\`\`bash
git clone https://github.com/m4cm3nz/dt-money-react-ts.git  

cd dt-money-react-ts  

-- JSON Server
npm run dev:server  

npm run dev  
\`\`\`
`

export function Post() {
  return (
    <PostContainer>
      <Header>
        <nav>
          <a href="#">
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </a>
          <a href="#">
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </nav>
        <h2>JavaScript data types and data structures</h2>
        <nav>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
            m4cm3nz
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faComment} />5 comentários
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
          {markdown}
        </ReactMarkdown>
      </Content>
    </PostContainer>
  )
}
