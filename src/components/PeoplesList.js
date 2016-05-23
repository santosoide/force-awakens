import React, {Component} from 'react';
import {Link} from 'react-router';
import Infinite from 'react-infinite'

class PeoplesList extends Component {

    constructor(props) {
        super(props);
        this.nextPage = 1;
        this.loader = this.loader.bind(this)
    }

    componentWillMount() {
        this.props.fetchPeoples(this.nextPage);
        console.log(this.props.peoplesList);
    }

    loader() {
        this.nextPage += 1;
        this.props.fetchPeoples(this.nextPage);
    }

    renderPeoples(peoples) {

        return peoples.results.map((people) => {
            return (
                <div className="ui card">
                    <div className="content">
                        <div className="header">{people.name}</div>
                        <div className="description">
                            <div className="ui list">
                                <div className="item">
                                    <i className="right triangle icon"></i>
                                    <div className="content">
                                        Gender : {people.gender}
                                    </div>
                                </div>
                                <div className="item">
                                    <i className="right triangle icon"></i>
                                    <div className="content">
                                        Birth Year : {people.birth_year}
                                    </div>
                                </div>
                                <div className="item">
                                    <i className="right triangle icon"></i>
                                    <div className="content">
                                        Height : {people.height}
                                    </div>
                                </div>
                                <div className="item">
                                    <i className="right triangle icon"></i>
                                    <div className="content">
                                        Hair Color : {people.hair_color}
                                    </div>
                                </div>
                                <div className="item">
                                    <i className="right triangle icon"></i>
                                    <div className="content">
                                        Skin Color : {people.skin_color}
                                    </div>
                                </div>
                                <div className="item">
                                    <i className="right triangle icon"></i>
                                    <div className="content">
                                        Eye Color : {people.eye_color}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="extra content">
                              <span className="left floated like">
                                <i className="like icon"></i>
                                Like
                              </span>
                              <span className="right floated">
                                <i className="long arrow right icon"></i>
                                <Link to={`people/${people.id}`}>See More</Link>
                              </span>
                    </div>
                </div>
            )
        })
    }

    elementInfiniteLoad() {
        return (
            <div className="ui yellow message">
                Loading...
            </div>
        )
    }

    render() {

        const { peoples, loading, error } = this.props.peoplesList;

        if (loading) {
            return (
                <div className="ui segment">
                    <div className="ui yellow message">
                        Loading...
                    </div>
                </div>
            )
        } else if (error) {
            return (
                <div className="ui segment">
                    <div className="ui yellow message">
                        End Pages - The Star Wars Force Awakens - People
                    </div>
                </div>
            )
        }

        return (
            <div className="ui segment">
                <div className="ui yellow message">
                    The Star Wars Force Awakens - People
                </div>
                <div className="ui five cards">
                    <Infinite elementHeight={330}
                              onInfiniteLoad={this.loader}
                              infiniteLoadBeginEdgeOffset={230}
                              loadingSpinnerDelegate={this.elementInfiniteLoad()}
                              useWindowAsScrollContainer
                              isInfiniteLoading={false}
                              timeScrollStateLastsForAfterUserScrolls={4000}
                    >
                        {this.renderPeoples(peoples)}
                    </Infinite>
                </div>
            </div>
        );
    }
}

export default PeoplesList;