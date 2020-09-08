import React from 'react';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css';
import { fetchCharacters } from './actions'
import { connect } from 'react-redux'

/*const App = () =>{
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters/?name=${query}`)


      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])
  
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}*/

class App extends React.Component {
  state = { query : '', isLoading: true }

  componentDidMount(){
    this.props.fetchCharacters(this.state.query)
    this.setState({ isLoading: false })
  }

  getQuery(q){
    this.setState({ query: q })
    this.props.fetchCharacters(this.state.query)
  }

  render(){
    return(
      <div className="container">
        <Header />
        <Search getQuery={(q) => this.getQuery(q)} />
        <CharacterGrid isLoading={this.state.isLoading} items={this.props.characters} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    characters : state.characters
  }
}

export default connect(mapStateToProps, { fetchCharacters })(App);
