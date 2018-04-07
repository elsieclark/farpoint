const React       = require('react');
const createClass = require('create-react-class');
const _           = require('lodash/core');
const config      = require('shared/config');
const PicoRouter  = require('pico-router');

const {TopBar, LowBar} = require('shared/components');

const Pages = {
	Game : require('./gamepage/gamepage.jsx'),
};

const navBarLinks = [
    {
        name: 'Game',
        link: '/',
    },
    {
        name: 'About',
        link: '/about'
    }
];

const Main = createClass({
	getDefaultProps : function(){
		return {
			url    : '',
			config : {}
		};
	},
	componentWillMount : function(){
		config.set(this.props.config);
		this.Router = PicoRouter.createRouter({
			'/' : <Pages.Game />,
			'*' : <div>Not Found</div>
		});
	},
	render : function(){
		return <div className='main'>
            <TopBar pages={navBarLinks} />
			<this.Router defaultUrl={this.props.url} />
            <LowBar />
		</div>;
	}
});

module.exports = Main;