import React from 'react';
import {Parallax, Background} from 'react-parallax';

const imgPath = "https://i1.wp.com/bitcast-a-sm.bitgravity.com/slashfilm/wp/wp-content/images/Star-Wars-The-Force-Awakens-home-video-header.jpg";

const s = {
    flexsearchWrapper: {
        height: 'auto',
        width: 'auto',
        maxWidth: '100%',
        overflow: 'hidden',
        background: 'transparent',
        margin: 0,
        position: 'relative'
    },

    flexsearchForm: {
        overflow: 'hidden',
        position: 'relative'
    },

    flexsearchInputWrapper: {
        padding: '0 66px 0 0',
        overflow: 'hidden'
    },

    flexsearchInput: {
        width: '100%',
        WebkitBoxSizing: 'content-box',
        MozBoxSizing: 'content-box',
        boxSizing: 'content-box',
        height: '40px',
        padding: '0 46px 0 10px',
        borderColor: '#888',
        borderRadius: '5px',
        borderStyle: 'solid',
        marginTop: '15px',
        color: '#333',
        fontFamily: 'Helvetica, sans-serif',
        fontSize: '16px',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        outline: 'none'
    },

    flexsearchSubmit: {
        position: 'absolute',
        right: 0,
        top: 0,
        display: 'block',
        width: '60px',
        height: '60px',
        padding: 0,
        border: 'none',
        marginTop: '5px',
        marginRight: '5px',
        background: 'transparent',
        color: '#888',
        fontFamily: 'Helvetica, sans-serif',
        fontSize: '40px',
        lineHeight: '60px',
        outline: 'none'
    },
    h1: {
        float: 'center',
        margin: '20px',
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif',
        fontSize: '45px',
        fontWeight: 'bold',
        lineHeight: '45px',
        textAlign: 'center'
    },
    h4: {
        float: 'center',
        margin: '5px',
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif',
        fontSize: '16px',
        lineHeight: '25px',
        textAlign: 'center'
    }
};

const ParallaxHome = () => {

    return (
        <Parallax>
            <Background>
                <img
                    src={imgPath}/>
            </Background>
            <div className="container text-center text-muted">
                <div className="row-fluid">
                    <div className="row" style={{marginTop:200,marginBottom:100,color:'#ffffff'}}>
                        <div style={s.flexsearchWrapper}>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default ParallaxHome;

