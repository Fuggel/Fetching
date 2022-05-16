import Post from "../post.json";

const LocalFetch = () => {
  return (
    <div>
      <div>
        {Post.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.text}</p>
              <img src={post.img} alt={post.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocalFetch;
