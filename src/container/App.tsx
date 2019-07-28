import React from 'react';
import myContext from "./Context";
import Main from "../component/Main";
import '../style/App.css';


const App = () => {
 
  const { Provider } = myContext;
  
  return (
  <Provider value={{customers:{}, isError:false, isPending:false}}>
      <div className="App">
        <Main/>
      </div>
  </Provider>    
    
  );
}

export default App;