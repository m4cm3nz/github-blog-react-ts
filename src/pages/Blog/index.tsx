import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BlogContainer, InputContainer, Posts, Profile } from './styles'

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
          <article>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types:
            </p>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types:
            </p>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types:
            </p>
          </article>
        </li>
      </Posts>
    </BlogContainer>
  )
}
