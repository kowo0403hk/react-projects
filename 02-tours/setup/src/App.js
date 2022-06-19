import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setTours(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message);
      });
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} />
      </main>
    );
  }
}

export default App;
