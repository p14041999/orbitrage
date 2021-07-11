import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/mobile.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <h3
        style={{
          textAlign: "center",
          marginVertical: 50,
          fontFamily: "Rubik",
          fontWeight: 400,
        }}
      >
        2021 All rights reserved by{" "}
        <span style={{ fontWeight: 600 }}>Orbit Edge</span>.finance
      </h3>
    </div>
  );
}

export default App;
