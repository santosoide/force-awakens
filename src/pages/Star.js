import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStar, getLoaded, getFailed } from '../actions/stars'
import StarDetail from '../components/StarDetail'

class Star extends Component {

    componentWillMount() {

        const getter = () => {
            return fetchStar(this.props.params.id)
        };
        this.props.dispatch(getter())
            .then(({data}) => {
                this.props.dispatch(getLoaded(data))
            })
            .catch((error) => {
                this.props.dispatch(getFailed(error))
            })
    }


    render() {
        return (
            <div className="ui four column grid stackable">
                <div className="column centered">
                    <div className="ui one cards">
                        <StarDetail star={this.props.detail.data}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ stars, detail }) {
    return {stars, detail}
}

export default connect(mapStateToProps)(Star)