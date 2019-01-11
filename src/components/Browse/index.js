import React, {Component} from 'react';
import Reviews from '../Reviews';

class Browse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?&api-key=${process.env.REACT_APP_API_KEY}`, {
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
    
    render() {
        return (
            <div>
                <Reviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default Browse;