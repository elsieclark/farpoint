const _            = require('lodash');
const createClass  = require('create-react-class');
const createRouter = require('pico-router').createRouter;
const Link         = require('pico-router').Link;
const React        = require('react');

const GamePage   = require('./gamepage/gamepage.jsx');
const FourOhFour = require('./fourohfour/fourohfour.jsx');

const TopBar   = require('../shared/topbar/topbar.jsx');
const LowBar   = require('../shared/lowbar/lowbar.jsx');

const Router = createRouter({
	'/': <GamePage />,
    '/*': <FourOhFour />
});

const navBarLinks = [
    {
        name: 'Home',
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
            url: '/'
		};
	},
	render : function(){
		return <div className='main'>
            <TopBar pages={navBarLinks} />
			<Router defaultUrl={this.props.url} className='router' />
            <LowBar />
		</div>
	}
});

module.exports = Main;
