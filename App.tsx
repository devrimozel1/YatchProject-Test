import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Router from "./src/routes/Router";
import { Provider } from "react-redux";
import { store } from "./src/ReduxToolkit/store";

function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
