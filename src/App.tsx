import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import EditForm from "./screens/form/EditForm";
import CreateForm from "./screens/form/CreateForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light ms-forms-navbar">
        <Link className="navbar-brand text-white" to="/">
          Forms App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/create">
                Create
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="/create" element={<EditForm />} />
      </Routes>

    </div>
  );
}

export default App;

// import React from 'react';

//   import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
  
//   function App(){
//     const notify = () => toast("Wow so easy!");

//     return (
//       <div>
//         <button onClick={notify}>Notify!</button>
//         <ToastContainer />
//       </div>
//     );
//   }
  
//   export default App;