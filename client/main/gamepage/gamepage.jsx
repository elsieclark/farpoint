"use strict";
const _           = require('lodash/core');
const createClass = require('create-react-class');
const React       = require('react');
let PIXI, app = {};

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
        this.initializePixi();

        window.addEventListener('resize', this.windowDidResize);
    },

    windowDidResize: function() {
        const [width, height] =  [this.refs['gamepage'].clientWidth, this.refs['gamepage'].clientHeight];
        app.renderer.autoResize = true;
        app.renderer.resize(width, height);
    },



    initializePixi: function () {
        PIXI = require('pixi.js');
        const [width, height] =  [this.refs['gamepage'].clientWidth, this.refs['gamepage'].clientHeight];

        app = new PIXI.Application({
            width,
            height,
            antialias: true,
            transparent: true,
            resolution: 1,
        });

        this.refs['gamepage'].appendChild(app.view);
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
        return <div className='gamepage' ref='gamepage'>
        </div>;
    }
});

module.exports = GamePage;
