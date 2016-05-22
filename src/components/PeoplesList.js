import React, {Component} from 'react';
import {Link} from 'react-router';
import PeopleAction from '../actions/peoples';

class PeoplesList extends Component {

    componentWillMount() {
        this.props.fetchPeoples(1);
    }

    renderPeoples(peoples) {
        if (!Array.isArray(peoples.results)) {
            return false;
        }

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
                              <span className="right floated star">
                                <i className="star icon"></i>
                                Favorite
                              </span>
                    </div>
                </div>
            )
        })
    }

    testLoad() {
        console.log('load more');
    }

    render() {

        const { peoples, loading, error } = this.props.peoplesList;

        if (loading) {
            return <div className="container"><h1>People</h1><h3>Loading...</h3></div>
        } else if (error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div className="ui segment">
                <div className="ui yellow message">
                    The Star Wars Force Awakens - People
                </div>
                <div className="ui five cards">
                    {this.renderPeoples(peoples)}
                </div>
            </div>
        );
    }
}

export default PeoplesList;