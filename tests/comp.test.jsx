const React  = require('react');
const test   = require('tape');
const render = (comp) => require('react-test-renderer').create(comp).toJSON();

test('renders the button', (t) => {
    const btn = render(<button className='test' />);
    t.equals(btn.type, 'button');
    t.equals(btn.props.className, 'test');
    t.end();
});