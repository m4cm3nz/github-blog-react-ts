import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BlogContainer, InputContainer, Posts, Profile } from './styles'
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

export function Blog() {
  const [user, setUser] = useState<User>({
    login: '',
    name: '',
    bio: '',
    company: '',
    htmlUrl: '',
    followers: 0,
  })

  async function LoadUser() {
    const response = await api.get<User>('users/m4cm3nz')
    setUser(response.data)
  }

  useEffect(() => {
    LoadUser()
  }, [])

  return (
    <BlogContainer>
      <Profile>
        <img src="https://github.com/m4cm3nz.png" alt=""></img>
        <div>
          <header>
            <h5>{user.name}</h5>
            <a href="#">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <p>{user.bio}</p>
          <nav>
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
          </nav>
        </div>
      </Profile>
      <InputContainer>
        <header>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </header>
        <input placeholder="Buscar conteúdo" />
      </InputContainer>
      <Posts>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
      </Posts>
    </BlogContainer>
  )
}
