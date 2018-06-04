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
            app: {},
            shipSprite: {},
            keyStates: {},
            shipSpeed: 0,
        };
    },

    componentDidMount: function() {
        this.initializePixi();

        window.addEventListener('resize', this.handleWindowResize);
        window.addEventListener('keydown', ({ key }) => { this.handleKeyEvent(true, key) });
        window.addEventListener('keyup', ({ key }) => { this.handleKeyEvent(false, key) });
        window.addEventListener('focus', (...args) => { console.log('kappa', ...args) })
        //console.log('lambda', document.activeElement)
        //document.focus()
    },

    handleWindowResize: function() {
        const [width, height] =  [this.refs['gamepage'].clientWidth, this.refs['gamepage'].clientHeight];
        app.renderer.autoResize = true;
        app.renderer.resize(width, height);
    },

    handleKeyEvent: function(wasDown, key) {
        console.log(key, wasDown ? 'Down' : 'Up')
        const keyStates = this.state.keyStates;
        keyStates[key] = wasDown;
        this.setState({ keyStates });
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

        this.setState({ app }, () => {
            this.createShip();
        });
    },

    createShip: function() {
        const ship = PIXI.Sprite.fromImage('textures/ship.png');
        const app = this.state.app;

        ship.anchor.set(0.5,0.6);
        ship.x = app.screen.width / 2;
        ship.y = app.screen.height / 2;
        ship.scale.x = ship.scale.y = 0.25;
        ship.speed = 0;

        app.stage.addChild(ship);
        app.ticker.add((delta) => {
            let rotation = 0;

            if (this.state.keyStates['a']) {
                rotation = -1;
            }
            if (this.state.keyStates['d']) {
                rotation = 1;
            }
            if (this.state.keyStates['w']) {
                ship.speed += delta * 0.2;
            }
            if (this.state.keyStates['s']) {
                ship.speed -= delta * 0.2;
            }
            ship.speed *= 0.98 ** delta;

            ship.rotation += 0.04 * delta * rotation;
            ship.x += Math.sin(ship.rotation) * ship.speed;
            ship.y -= Math.cos(ship.rotation) * ship.speed;
        });
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
