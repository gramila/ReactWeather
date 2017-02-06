var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);

        if(location.length > 0){
            this.refs.search.value = '';
            window.location.hash = '#?location=' + encodedLocation;
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/">Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/examples">Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city" ref="search"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = Nav;

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
//old nav
/*var Nav = (props) => {
    return (
        <div>
                    <h2>nav component</h2>
                    <IndexLink to="/">Get Weather</IndexLink>
                    <Link to="/about">About</Link>
                    <Link to="/examples">Examples</Link>
                </div>

                )
}*/



