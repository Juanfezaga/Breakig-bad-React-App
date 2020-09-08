import React from "react";

/*const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className='search'>
            <form>
                <input
                 type='text'
                 className='form-control'
                 placeholder='Search characters'
                 value={text}
                 onChange={(e)=> onChange(e.target.value)}
                 autoFocus
                />
            </form>
        </section>
    )
}*/
class Search extends React.Component {
  state = { text: "" };

  onChange(event) {
    this.setState({ text: event });
    this.props.getQuery(event);
  }
  render() {
    return (
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search characters"
            value={this.state.text}
            onChange={(e) => this.onChange(e.target.value)}
            autoFocus
          />
        </form>
      </section>
    );
  }
}

export default Search;
