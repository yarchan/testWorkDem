//import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import App1 from "./components/App1";
import "./App.css";

function AppMobile() {
  return (
    <div className="App">
      <div className="App__wrapeer">
        <Header />
        <Info />
        <Footer />
        {/* <App1 /> */}
      </div>
    </div>
  );
}

export default AppMobile;
