import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import ReactInterval from 'react-interval';
var request = require('sync-request');

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  render() {


    var styles = {
      backgroundColor: this.state.color,
      height: "100%"
    }
    var stylesGrid = {
      padding: "10px"
    }
    return (
      <Grid style={stylesGrid} item xs={3}>
        <Paper style={styles} className={this.props.paper}></Paper>
        {/* <ReactInterval timeout={1000} enabled={true}
          callback={() => this.getColor()} /> */}
      </Grid >

    )
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ color: request('GET', './color').body })
    }, 4000)

  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  getColor() {
    fetch('./color')
      .then(response => this.setState({ color: response.body }));
  }
}

module.exports = Square;
