import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./pages/Header/Header";
import Home from "./pages/Body/Home";
import AddTodo from "./pages/Body/AddTodo";
import UpdateTodo from "./pages/Body/UpdateTodo";
import Error from "./pages/Header/Error";

const Maincomponents = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/edit/:id" element={<UpdateTodo />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Maincomponents;
