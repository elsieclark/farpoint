const _           = require('lodash/core');
const createClass = require('create-react-class');
const React       = require('react');
let PIXI = {};

const GamePage = createClass({
    getDefaultProps: function() {
        return {

        };
    },

    getInitialState: function() {
        return {
        };
    },

    componentDidMount: function() {
        PIXI = require('pixi.js');
    },

    clickTest: function() {
        console.log('Click!');

        let type = "WebGL";
        if(!PIXI.utils.isWebGLSupported()){
            type = "canvas"
        }

        PIXI.utils.sayHello(type)
    },

    render: function() {
        return <div className='gamepage'>
        </div>;
    }
});

module.exports = GamePage;
