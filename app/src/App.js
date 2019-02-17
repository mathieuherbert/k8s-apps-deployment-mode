import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Square from './Square.js'


export default class CenteredGrid extends Component {
  createGrid = () => {
    let grid = []

    // Outer loop to create parent
    for (let i = 0; i < 20; i++) {

      //Create the parent and add the children
      grid.push(<Square />)
    }
    return grid
  }
  render() {
    var styles = { padding: "1%", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, }
    return (
      <div className={this.props.root} >
        <Grid container style={styles} container spacing={2}>
          {this.createGrid()}
        </Grid>
      </div>
    );
  }
}




// import React, { Component } from "react";
// import {
//   View,
//   // StyleSheet,
//   // Dimensions,
//   // Text,
// } from "react-native";


// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// //import GridListTile from '@material-ui/core/GridListTile';
// //mport GridListTileBar from '@material-ui/core/GridListTileBar';



// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: null,
//     };
//   }

//   render() {


//     return (
//       <View>
//         <Grid container spacing={24}>
//           <Grid item xs={12}>
//             <Paper className={this.props.paper}>xs=12</Paper>
//           </Grid>
//           <Grid item xs={6}>
//             <Paper className={this.props.classes.paper}>xs=6</Paper>
//           </Grid>
//           <Grid item xs={6}>
//             <Paper className={this.props.classes.paper}>xs=6</Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className={classes.paper}>xs=3</Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className={classes.paper}>xs=3</Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className={classes.paper}>xs=3</Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className={classes.paper}>xs=3</Paper>
//           </Grid>
//         </Grid>
//       </View>
//     );
//   }
//   componentDidMount() {
//     this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
// }



// // function renderItem(item) {

// //   var res = request('GET', './color');
// //   var color = {
// //     backgroundColor: res.body,
// //     height: "0px",
// //     marginLeft: "0px",
// //     marginRight: "0px",
// //   }
// //   return (
// //     <View style={[styles.item, color]}>
// //       <View style={color}>
// //         <Text style={styles.text}></Text>
// //       </View>
// //     </View >
// //   )



// // }
