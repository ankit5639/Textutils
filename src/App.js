import React, { useState } from "react";
import { About } from "./component/About";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import { TextForm } from "./component/textForm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) => {
    setAlert({
      msg: Message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };

  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("light mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";

      // setInterval(()=>{
      //   document.title = "Textutils is amaZing"
      // } , 2000);

      // setInterval(()=>{
      //   document.title = "Inastall Textutils Now"
      // } , 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          {/* <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        /> */}
          <Switch>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
