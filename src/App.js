import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Elements from "./components/Elements";
import SetTitle from "./components/SetTitle";
import axios from "axios";

export default function App() {
  const [myResponse, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  function getData() {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(function (response) {
        // handle success
        setResponse(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Elements childData={getData} />
      {loading && <CircularProgress color="secondary" />}
      {myResponse
        .filter((user) => {
          return user.id % 2 === 0;
        })
        .map((filterTitle, index) => {
          return <SetTitle showTitle={filterTitle.title} key={index} />;
        })}
    </div>
  );
}
