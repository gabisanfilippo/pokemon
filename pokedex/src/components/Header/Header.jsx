import {Container, Search} from './style'

function Header(){
    return(
        <Container>
            <h1>Pokedex</h1>
            <Search>
                <input placeholder="Enter the Pokemon's name or ID" />
                <img src="img/search.svg" alt="search" />
            </Search>
            
        </Container>
    )
}
export default Header