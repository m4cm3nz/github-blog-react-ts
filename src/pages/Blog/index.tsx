import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BlogContainer, InputContainer, Posts, Profile } from './styles'
import { Post } from './components/Post'

export function Blog() {
  return (
    <BlogContainer>
      <Profile>
        <img src="https://github.com/m4cm3nz.png" alt=""></img>
        <div>
          <header>
            <h5>Rafael Mac Menz</h5>
            <a href="#">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <article>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </article>
          <footer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              m4cm3nz
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              m4cm3nz.it
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              11 seguidores
            </div>
          </footer>
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
