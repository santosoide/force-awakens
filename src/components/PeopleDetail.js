import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class PeopleDetail extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.props.fetchPost(this.props.peopleId);
    }

    render() {
        const { people, loading, error } = this.props.activePeople;

        if (loading) {
            return <div className="container">Loading...</div>;
        } else if (error) {
            return <div className="alert alert-danger">{error.message}</div>
        } else if (!people) {
            return <span />
        }

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
                              <span className="right floated star">
                                <i className="star icon"></i>
                                <Link property="detail" to={`people/${people.id}`}>See More</Link>
                              </span>
                </div>
            </div>
        );
    }
}

export default PeopleDetail;
