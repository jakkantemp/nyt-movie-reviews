import React, {Component} from 'react';
import styled from 'styled-components';
import Reviews from '../Reviews';

const SearchForm = styled.form`
    padding: 15px;
`;

const SearchLabel = styled.label`
    display: block;
    margin: 0;
`;

const SearchInput = styled.input`
    display: block;
    margin: 0;
`;

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    fetchReviews = () => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?&api-key=${process.env.REACT_APP_API_KEY}&query=${this.state.searchTerm}`, {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
              }
        }).then(res => 
            res.json()
        )
        .then(response => 
            this.setState({reviews: response.results})
        )
        .catch(error => 
            console.error('Error:', error)
        );
    }

    handleChange = (event) =>
        this.setState({searchTerm: event.target.value});
    
    
    handleSubmit = (event) => {
        this.fetchReviews();
        event.preventDefault();
    }

    handleReset = () => {
        this.setState({searchTerm: '', reviews: []});
    }

    render() {
        return (
            <div>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchLabel htmlFor="search-input">Search term:</SearchLabel>
                    <SearchInput id="search-input" type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                    <input type="button" value="Reset" onClick={this.handleReset}></input>
                </SearchForm>
                <Reviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default Search;