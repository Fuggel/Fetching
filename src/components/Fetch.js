import { useState, useEffect } from "react";

const API_KEY = "https://jsonplaceholder.typicode.com/users";

const Fetch = () => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(API_KEY)
      .then((response) => {
        if (response.status >= 400) throw new Error("Failed loading data");
        return response.json();
      })
      .then(
        (users) => {
          setUsers(users);
        },
        (err) => {
          setErr(err);
        }
      );
  }, []);

  if (err) return <div>{err.message}</div>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
