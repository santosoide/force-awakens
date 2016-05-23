import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { fetchStars, savePosition } from '../actions/stars';
import StarsList from '../components/StarsList';

class Stars extends Component {

    constructor(props) {
        super(props);
        this.currentPage = 0;
        this.nextPagination = this.nextPagination.bind(this);
        this.openHooks = this.openHooks.bind(this)
    }

    componentDidMount() {
        if (this.props.position > 0) {
            window.scrollTo(0, this.props.position)
        }
    }

    nextPagination() {
        this.currentPage += 1;
        this.props.dispatch(fetchStars(this.currentPage));
    }

    openHooks(url) {
        browserHistory.push(url);
        this.props.dispatch(savePosition(window.scrollY));
    }

    render() {

        return (
            <div className="ui four column grid stackable">
                <div className="column centered">
                    <div className="ui green message">
                        <p style={{textAlign:'center'}}>The Star Wars Force Awakens</p>
                    </div>
                    <div className="ui one cards">
                        <StarsList
                            stars={this.props.stars}
                            loader={() => { this.nextPagination() }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ stars, loading, failed, position }) {
    return {stars, loading, failed, position}
}

export default connect(mapStateToProps)(Stars)
