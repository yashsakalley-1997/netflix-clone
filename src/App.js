import { useState } from "react";

import { Provider } from "react-redux";
import Body from "./Components/Body";

import appStore from "./store/appStore";
import AppContext from "./utils/AppContext";

function App() {
  const [gptSearchFlag,setFlag] = useState(false);
  const setGptSearch = ()=>{
    setFlag(!gptSearchFlag)
  }
  return (
    <div>
      <AppContext.Provider value={{isGptSearch:gptSearchFlag,setGptSearch:setGptSearch}}>
        <Provider store={appStore}>
          <Body/>
        </Provider>  
      </AppContext.Provider>
    </div>
  );
}

export default App;
