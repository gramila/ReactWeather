var React = require('react');
var {Link, IndexLink} = require('react-router');

/*var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>nav component</h2>
                <IndexLink to="/">Get Weather</IndexLink>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        )
    }
});*/

//refactored stateless component
var Nav = (props) => {
    return (
        <div>
            <h2>nav component</h2>
            <IndexLink to="/">Get Weather</IndexLink>
            <Link to="/about">About</Link>
            <Link to="/examples">Examples</Link>
        </div>

    )
}
module.exports = Nav;