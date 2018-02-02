const React       = require('react');
const createClass = require('create-react-class');
const _           = require('lodash');


const OtherPage = createClass({
	getDefaultProps : function(){
		return {

		};
	},
	render : function(){
		return <div className='OtherPage'>
			OtherPage Component Ready.
		</div>;
	}
});

module.exports = OtherPage;
