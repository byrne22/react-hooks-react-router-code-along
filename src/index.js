import React from "react";
import ReactDOM from "react-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}
ReactDOM.render(
  <BrowserRouter>
    <Route path="/">
      <Home />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
