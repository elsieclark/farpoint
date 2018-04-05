const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');


const GamePage = createClass({
    getDefaultProps: function() {
        return {

        };
    },

    getInitialState: function() {
        return {
            context: {},
        };
    },

    componentDidMount: function() {

    },

    render: function() {
        return <div className='gamepage'>
            <canvas className='gamecanvas'></canvas>
        </div>;
    }
});

module.exports = GamePage;
