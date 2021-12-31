import React,{Component} from "react";
import { TextField ,Button} from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//   }));
  
  class First extends Component {
       state={
        firstName: "",
        email: ""
       }
    //    addUser = () => {
    //     this.setState({
    //       firstName: [...this.state.firstName, <firstName />],
    //       email: [...this.state.email, <email/>]

    //     })
    //   }
    addUser=(e)=>{
        console.log(this.state)
    }

    // const classes = useStyles();
    render(){
    return(
        <div>
           {/* <h4>Name</h4>
            <form className={classes.root} noValidate autoComplete="off">
         
                 <TextField id="outlined-basic" label="Name" variant="outlined" />
                 
            </form>
            <h4>Email</h4>
          <form className={classes.root} noValidate autoComplete="off">

             <TextField id="outlined-basic" label="email" variant="outlined" /><br />
             <Button variant="contained" color="primary" href="#contained-buttons" onClick={this.addUser}>
        Link
      </Button> */}
            {/* </form> */}
            <h4>Name</h4>
            <TextField id="outlined-basic" label="Name" variant="outlined" /><br />
            <h4>Email</h4>
            <TextField id="outlined-basic" label="email" variant="outlined" /><br /><br />
             <Button variant="contained" color="primary" href="#contained-buttons" onClick={this.addUser}>
        Link
      </Button>


        </div>

    )

}
  }
export default First