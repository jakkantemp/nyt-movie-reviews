import React, {Component} from 'react';

class Browse extends Component {
    componentDidMount() {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?&api-key=${process.env.REACT_APP_API_KEY}`, {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
              }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div>
                Browse
            </div>
        )
    }
}

export default Browse;