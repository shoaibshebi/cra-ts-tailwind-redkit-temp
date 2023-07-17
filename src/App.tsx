import { Provider } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import store from "./store/redux-saga";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/wallet-details/:addressHash"
              element={<Layout>{/* <WalletDetails /> */}</Layout>}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
