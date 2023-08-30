import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { Provider } from "react-redux";
import store from "./state";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
