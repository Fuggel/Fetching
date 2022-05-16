import { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const [users, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) return <h3>Couldn't fetch data</h3>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.username}</h2>
        </div>
      ))}
    </div>
  );
}

export default Axios;
