import axios from "axios";

const Page = ({ posts, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
      {posts.map((post) => (
        <div>
          <li style={{color: "blue"}} key={post.id}>{post.title}</li>
          <p style={{color: "red"}}>{post.body}</p>
        </div>
        ))}
    </div>
  );
};

Page.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:1337/posts/");
    const posts = res.data;
    return { posts };
  } catch (error) {
    return { error };
  }
};

export default Page;
