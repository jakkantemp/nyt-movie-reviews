import React, { Component } from 'react';
import Review from '../Review';

class Reviews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeReviewId: ''
        }
    }

    activate = (event, id) => {
        this.setState({activeReviewId: id})
    }

    render () {
        const reviews = this.props.reviews.map((review) =>
            <Review 
                key={review.link.url}
                id={review.link.url}
                displayTitle={review.display_title}
                summary={review.summary_short}
                handleClick={this.activate}
                active={review.link.url === this.state.activeReviewId}
            />
        );

        return (
            <div>
                {reviews}
            </div>
        )
    }
}

export default Reviews;