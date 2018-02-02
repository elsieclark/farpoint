const _            = require('lodash');
const createClass  = require('create-react-class');
const createRouter = require('pico-router').createRouter;
const Link         = require('pico-router').Link;
const React        = require('react');

const HomePage   = require('./homepage/homepage.jsx');
const OtherPage  = require('./otherpage/otherpage.jsx');
const FourOhFour = require('./fourohfour/fourohfour.jsx');

const TopBar   = require('../shared/topbar/topbar.jsx');
const MainPage = require('../shared/mainpage/mainpage.jsx');
const LowBar   = require('../shared/lowbar/lowbar.jsx');

const Router = createRouter({
	'/': <MainPage><HomePage /></MainPage>,
    '/other': <HomePage />,
    '/*': <MainPage><FourOhFour /></MainPage>
});

const navBarLinks = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Projects',
        link: '/projects',
    },
    {
        name: 'Résumé',
        link: '/résumé'
    },
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
			<Router defaultUrl={this.props.url} />
            <LowBar />
		</div>
	}
});

module.exports = Main;
