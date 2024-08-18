import { store } from "./REDUX/store";
import { Provider } from "react-redux";

import AppRouting from "./HELPERS/config-route/AppRouting";
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import "./app.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Provider store={store}>
          <AppRouting />
        </Provider>

      </ThemeProvider>
    </>
  );
}

export default App;