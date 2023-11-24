import { Provider } from "react-redux";
import appStore from "./store/appStore";

import Body from "./Components/Body";

function App() {

  return (
    <div>
      <Provider store={appStore}>
        <Body/>
      </Provider>
    </div>
  );
}

export default App;
