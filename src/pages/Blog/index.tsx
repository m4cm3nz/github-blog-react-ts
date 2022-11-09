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
import { useEffect, useState } from 'react'

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
  title: string
  body: string
  updatedAt: Date
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

  async function LoadUser() {
    const response = await api.get<User>('users/m4cm3nz')
    setUser(response.data)
  }

  async function LoadIssues(text?: string) {
    const response = await api.get('search/issues', {
      params: {
        q: 'repo:m4cm3nz/github-blog-react-ts',
      },
    })

    const allIssues = response.data.items.map((item: any) => {
      return {
        ...item,
        updatedAt: item.updated_at,
      } as Issue
    })

    setIssues(allIssues)
  }

  useEffect(() => {
    LoadUser()
    LoadIssues()
  }, [])

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
              <a href="#">
                <FontAwesomeIcon icon={faBuilding} />
                {user.company}
              </a>
            )}
            <a href="#">
              <FontAwesomeIcon icon={faUserGroup} />
              {user.followers} seguidores
            </a>
          </NavigationLinks>
        </div>
      </ProfileContainer>
      <InputContainer>
        <header>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </header>
        <input placeholder="Buscar conteúdo" />
      </InputContainer>
      <Posts>
        {issues.map((issue) => (
          <li key={issue.id}>
            <Post {...{ ...issue, content: issue.body }} />
          </li>
        ))}
      </Posts>
    </BlogContainer>
  )
}
