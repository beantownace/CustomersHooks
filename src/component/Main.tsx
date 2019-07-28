import React,{useEffect, useContext, useReducer, } from "react";
import myContext from "../container/Context";
import ReactTable from 'react-table';
import EditModal from "./editModal";
import AddModal from "./addModal";
import {Container } from 'semantic-ui-react';
import 'react-table/react-table.css';
import _ from 'lodash';

import { useCustomersGet, useCustomerAdd, useCustomerEdit } from "../hooks";

const Main = () => {
    const initialState = useContext(myContext);
    
    let state = useCustomersGet(initialState);
    const data = _.values(state.customers);

    const columns = [
        {
            Header: 'S/N',
            accessor: "id",
            filterable: false,
            width: 100,
            maxWidth: 100,
            minWidth:100,
        }, 
        {
            Header: 'Parent ID',
            accessor: "id",
            filterable: false,
            width: 100,
            maxWidth: 100,
            minWidth:100,
        }, 
        {
            Header: 'First Name',
            accessor: "first_name",
             
        },
        {
            Header: 'Last Name',
            accessor: "last_name"
        }, 
        {
            Header: 'Email',
            accessor: "email"
        },
        {
            Header: 'Gender',
            accessor: "gender",
            filterable: false,
            sortable: false,
        },
        {
            Header: 'Actions',
            filterable: false,
            sortable: false,
            Cell: (row:any) => {
             return <div>
                <EditModal row={row} editCustomer={useCustomerEdit}/>
            </div>},
            width: 200,
            maxWidth: 200,
            minWidth:200,
        },
    ]
      return <div>
          <Container fluid textAlign='left'> 
          <div className="add-button"> 
             <AddModal addCustomer={useCustomerAdd}/>
          </div>
        
          <ReactTable
            columns={columns}
            data={data}
            loading={state.isPending}  
            filterable
            defaultPageSize={5}
            SubComponent={row => {
                const subValues = [row.original];
                const subColumns = [
                    {
                        Header: 'S/N',
                        accessor: "id",
                        filterable: false,
                        width: 100,
                        maxWidth: 100,
                        minWidth:100,
                    }, 
                    {
                        Header: 'First Name',
                        accessor: "first_name",
                         
                    },
                    {
                        Header: 'Last Name',
                        accessor: "last_name"
                    }, 
                    {
                        Header: 'Email',
                        accessor: "email"
                    },
                    {
                        Header: 'Gender',
                        accessor: "gender",
                        filterable: false,
                        sortable: false,
                    },
                ]
                return (
                  <div style={{ padding: "20px" }}>
                    <em>
                      Here you can put the contents of a sub-component like and array in the intial data 
                    </em>
                    <br />
                    <br />
                    <ReactTable
                      data={subValues}
                      columns={subColumns}
                      defaultPageSize={1}
                      showPagination={false}
                    />
                  </div>
                );
              }}  
      />
          </Container>
          
          </div>
}

export default Main;