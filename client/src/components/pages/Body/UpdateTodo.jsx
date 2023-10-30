import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBattleNet } from "@fortawesome/free-brands-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/todos/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setValues({
          ...values,
          title: res.data.title,
          description: res.data.description,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const NewTodoUpdate = (event) => {
    event.preDefault();
    axios
      .put("http://127.0.0.1:8000/api/todos/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <section className="container">
          <form onSubmit={NewTodoUpdate}>
            <div className="mt-1 mb-3">
              <label htmlFor="title" className="label-control">
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className="text-2xl m-1 text-green-500 "
                />
                Title
              </label>
              <input
                value={values.title}
                onChange={(e) =>
                  setValues({ ...values, title: e.target.value })
                }
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
                value={values.description}
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
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

export default UpdateTodo;
