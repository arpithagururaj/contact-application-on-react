import { DataGrid } from "@material-ui/data-grid";


import React from "react";
//import DeleteIcon from '@material-ui/icons/Delete';
//import { Delete} from '@material-ui/icons';




    //console.log(props);

  
    

 



 const columns =[
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    }
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 110,
    //   editable: true,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${
    //       params.getValue(params.id, 'email') || ''
    //     }`,
    // },
 ];
  
   const rows = [
    { id: 1, email: 'Snow', firstName: 'Jon' },
    { id: 2, email: 'Lannister', firstName: 'Cersei' },
    { id: 3, email: 'Lannister', firstName: 'Jaime'},
    { id: 4, email: 'Stark', firstName: 'Arya' },
    { id: 5, email: 'Targaryen', firstName: 'Daenerys' },
    { id: 6, email: 'Melisandre', firstName: null},
     { id: 7, email: 'Clifford', firstName: 'Ferrara' },
   { id: 8, email: 'Frances', firstName: 'Rossini' },
    { id: 9, email: 'Roxie', firstName: 'Harvey' },
 ];
  
    export default function DataTable() {
      // const [columns,setcolumn] =useState(0)
      //   columns= [
      //   { field: 'id', headerName: 'ID', width: 90 },
      //   {
      //     field: 'firstName',
      //     headerName: 'First name',
      //     width: 150,
      //     editable: true,
      //   },
      //   {
      //     field: 'email',
      //     headerName: 'Email',
      //     width: 150,
      //     editable: true,
      //   },
      // ];

      // const [rows,setrows] = useState(0)
      //   rows=[
      //   { id: 1, email: 'Snow', firstName: 'Jon' },
      //   { id: 2, email: 'Lannister', firstName: 'Cersei' },
      //   { id: 3, email: 'Lannister', firstName: 'Jaime'},
      //   { id: 4, email: 'Stark', firstName: 'Arya' },
      //   { id: 5, email: 'Targaryen', firstName: 'Daenerys' },
      //   { id: 6, email: 'Melisandre', firstName: null},
      //   { id: 7, email: 'Clifford', firstName: 'Ferrara' },
      //   { id: 8, email: 'Frances', firstName: 'Rossini' },
      //   { id: 9, email: 'Roxie', firstName: 'Harvey' },
      // ];
      
     
    return (
      <div style={{ height: 400, width: '100%' }}>
          <h4>contactlist</h4>
          
        <DataGrid 
          rows={rows }
          columns={columns}
          
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          
          
          
        />
       
      </div>
    );
  }
  


