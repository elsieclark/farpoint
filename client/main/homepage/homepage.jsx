const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const Break      = require('../../shared/components/break/break.jsx');
const Paragraph  = require('../../shared/components/paragraph/paragraph.jsx');
const TitleBlock = require('../../shared/components/titleblock/titleblock.jsx');


const HomePage = createClass({
	getDefaultProps : function(){
		return {

		};
	},
	render : function(){
		return <div className='homepage'>
                
                <TitleBlock name='Stirling Engine: Mark II' date='April 19 2017'/>
                
                <Paragraph>
                    This is just some perfectly ordinary body text that describes my awesomely operational stirling engine. Hooray for sample text. But I'm going to keep writing words here for a while, and try some different things to make this paragraph longer than it already is.
                 </Paragraph>
                
                <Paragraph>
                    Okay, now I've got a line break in here too. Let's see how that works. In addition, I'll put some quite short words, and additionally some exceedingly interminable vocabulary. Now that's done, there's no alternative but to keep talking about some dull stuff.
                 </Paragraph>
                
                <Break height='5px' />
                
                <Paragraph>
                    Now there's some more text, but it's after the page break. This is mainly just to see how well the spacing of the different paragraphs works when this thing gets in the middle.
                 </Paragraph>
                
                <Break />
                
                <TitleBlock name='Stirling Engine: Mark III' date='April 21 2017'/>
                
            </div>
	}
});

module.exports = HomePage;
