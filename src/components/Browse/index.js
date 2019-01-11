import React, {Component} from 'react';
import Review from '../Review';

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
        const reviews = this.state.reviews.map((review) => 
            <Review key={review.link.url} displayTitle={review.display_title}/>
        );

        return (
            <div>
                {reviews}
            </div>
        )
    }
}

export default Browse;