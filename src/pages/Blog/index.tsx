import { FormEvent, useEffect, useState } from 'react'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BlogContainer,
  InputContainer,
  Posts,
  ProfileContainer,
  NavigationLinks,
  ProfileHeader,
  Bio,
} from './styles'
import { Post } from './components/Post'
import { api } from '../../lib/api'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface User {
  login: string
  name: string
  bio: string
  company: string
  htmlUrl: string
  followers: number
}

export interface Issue {
  id: number
  number: number
  title: string
  body: string
  age: Date
}

export function Blog() {
  const [user, setUser] = useState<User>({
    login: '',
    name: '',
    bio: '',
    company: '',
    htmlUrl: '',
    followers: 0,
  })

  const [issues, setIssues] = useState<Issue[]>([])

  async function loadUser() {
    const response = await api.get('users/m4cm3nz')
    const user = {
      ...response.data,
      htmlUrl: response.data.html_url,
    }
    setUser(user)
  }

  async function loadIssues(text?: string) {
    let query = 'repo:m4cm3nz/github-blog-react-ts'

    if (text) query = `${query} ${text}`

    const response = await api.get('search/issues', {
      params: {
        q: query,
      },
    })

    const allIssues = response.data.items.map((item: any) => {
      return {
        ...item,
        age: formatDistanceToNow(new Date(item.updated_at), {
          locale: ptBR,
          addSuffix: true,
        }),
      } as Issue
    })

    setIssues(allIssues)
  }

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadUser()
    loadIssues()
  }, [])

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      loadIssues(searchTerm)
    }, 1000)

    return () => clearTimeout(delayDebounce)
  }, [searchTerm])

  function handleUserTextTyping(event: FormEvent<HTMLInputElement>) {
    setSearchTerm(event.currentTarget.value)
  }

  return (
    <BlogContainer>
      <ProfileContainer>
        <img src="https://github.com/m4cm3nz.png" alt=""></img>
        <div>
          <Bio>
            <ProfileHeader>
              <h5>{user.name}</h5>
              <a href={user.htmlUrl}>
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </ProfileHeader>
            <p>{user.bio}</p>
          </Bio>
          <NavigationLinks>
            <a href={user.htmlUrl}>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </a>
            {user.company && (
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBuilding} />
                {user.company}
              </a>
            )}
            <a
              href="https://github.com/m4cm3nz?tab=followers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faUserGroup} />
              {user.followers} seguidores
            </a>
          </NavigationLinks>
        </div>
      </ProfileContainer>
      <InputContainer>
        <header>
          <h3>Publicações</h3>
          <span>{issues.length} publicações</span>
        </header>
        <input placeholder="Buscar conteúdo" onInput={handleUserTextTyping} />
      </InputContainer>
      <Posts>
        {issues.map((issue) => (
          <li key={issue.id}>
            <Post issue={issue} />
          </li>
        ))}
      </Posts>
    </BlogContainer>
  )
}
