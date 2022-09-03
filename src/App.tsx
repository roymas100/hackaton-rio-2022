import React from "react";
import Button from "./components/Button";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <Button>Ver detalhes</Button>
    </AppProvider>
  );
}

export default App;
