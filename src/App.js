import logo from './logo.svg';
import './App.css';
import { use } from 'react';

function App() {
  const userInfo = { username: "Erica", isAdmin: true };
  return (
    <BlogPage userInfo={userInfo} />
  );
}

function BlogPage({ userInfo }) {
  return (
    <Post userInfo={userInfo} />
  );
}

function Post({ userInfo }) {
  return (
    <div>
      <h2>My Blog Post Title </h2>
      <p>This is an example blog post.</p>
      <Comments userInfo={userInfo} />
    </div>
  );
}

function Comments({ userInfo }) {
  return (
    <div>
      {
        userInfo.isAdmin && <button>Edit Comment</button>
      }
      <p>Comments section... </p>

    </div>
  );
}

export default App;
