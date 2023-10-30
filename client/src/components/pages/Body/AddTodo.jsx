import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBattleNet } from "@fortawesome/free-brands-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const AddTodo = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://127.0.0.1:8000/api/todos/",
        { title: title, description: description },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        navigate("/addtodo");
      });
  };
  return (
    <div>
      <div>
        <section className="container">
          <form onSubmit={AddTodo}>
            <div className="mt-1 mb-3">
              <label htmlFor="title" className="label-control">
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className="text-2xl m-1 text-green-500 "
                />
                Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="title"
                id="title"
                className="form-control"
                required
              />
            </div>
            <div className="mt-1 mb-3">
              <label htmlFor="description" className="label-control">
                <FontAwesomeIcon
                  icon={faBattleNet}
                  className="text-xl text-green-500"
                />
                Description
              </label>

              <textarea
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                name="description"
                rows="4"
                cols="50"
                className="form-control"
                required
              ></textarea>
            </div>
            <button className="px-10 py-2 bg-green-500 capitalize text-black text-xl font-semibold rounded hover:bg-green-700 hover:text-white">
              Add
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddTodo;
