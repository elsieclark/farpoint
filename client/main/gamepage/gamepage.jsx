const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');
const PIXI        = require('pixi.js');


const GamePage = createClass({
    getDefaultProps: function() {
        return {

        };
    },

    getInitialState: function() {
        return {
            ctx: {},
        };
    },

    componentDidMount: function() {
        this.setState({
            ctx: this.refs['canvas'].getContext('2d'),
        });
    },

    clickTest: function() {
        console.log('Click!');
        /*let ctx = this.state.ctx;
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0,0,150,75);*/

        let type = "WebGL"
        if(!PIXI.utils.isWebGLSupported()){
            type = "canvas"
        }

        PIXI.utils.sayHello(type)
    },

    render: function() {
        return <div className='gamepage'>
            <canvas className='gamecanvas' ref='canvas' onClick={this.clickTest}/>
        </div>;
    }
});

module.exports = GamePage;
