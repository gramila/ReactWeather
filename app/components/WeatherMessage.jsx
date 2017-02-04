var React = require('react');

// var WeatherMessage = React.createClass({

//     render: function () {
//         var {temp, location} = this.props;

//         return (
//             <h1>It is {temp} in {location}</h1>
//         )
//     }
// });

//refactored stateless component
var WeatherMessage = (props) => {
    var {temp, location} = props;

    return (
        <h1>It is {temp} in {location}</h1>
    )
}
module.exports = WeatherMessage;