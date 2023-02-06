import React from "react";

import Footer from "../Footer";
import ToastPlayground from "../ToastPlayground";
import ToastProvider from "../ToastContext";

function App() {
  return (
    <React.Fragment>
      <ToastProvider>
        <ToastPlayground />
        <Footer />
      </ToastProvider>
    </React.Fragment>
  );
}

export default App;
