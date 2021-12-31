import { Box } from "@material-ui/core"
//import { blue } from "@material-ui/core/colors"
import React from "react"

const head = ()=>{
    return(
        <div style={{ width: '100%' , color:'blue'}}>
           <Box display="flex" p={1} bgcolor="background.paper" justifyContent="center">
        <h1>"Contact manager"</h1>
      </Box>
        </div>
    )
}
export default head