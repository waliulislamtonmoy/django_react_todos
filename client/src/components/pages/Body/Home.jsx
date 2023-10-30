import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSquarePen } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      axios
        .get("http://127.0.0.1:8000/api/todos/", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setTodo(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchTodo();
  }, []);

  const deleteTodo = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/todos/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {todo.map((data, key) => {
          return (
            <div key={key}>
              <section className="">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                  <div className="p-5">
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase">
                        {data.title}
                      </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700">
                      {data.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-2">
                      <div></div>
                      <div>
                        <section className="font-bold text-sm">
                          {data.date}
                        </section>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-5">
                      <div>
                        <section>
                          <Link to={`/edit/${data.id}`}>
                            <FontAwesomeIcon
                              icon={faSquarePen}
                              className="text-3xl text-green-500 cursor-pointer"
                            />
                          </Link>
                        </section>
                      </div>
                      <div>
                        <section>
                          <FontAwesomeIcon
                            onClick={() => deleteTodo(data.id)}
                            icon={faTrash}
                            className="text-3xl text-red-500 cursor-pointer"
                          />
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
