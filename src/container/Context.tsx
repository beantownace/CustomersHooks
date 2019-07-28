import React from 'react';

const initialState = {customers:{}, isError:false, isPending:false};
const myContext = React.createContext(initialState);

 export default myContext;