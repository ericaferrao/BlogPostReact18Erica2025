import './App.css';
import BlogPage from './components/BlogPage';
import { ThemeProvider } from './context/ThemeProvider';

import UserInfoContext from './context/UserInfoContext';
function App() {
  const userInfo = {
    username: "Admin",
    isAdmin: true
  };
  return (
    <>
      <UserInfoContext.Provider value={userInfo}>

        <ThemeProvider>
          <BlogPage />
        </ThemeProvider>

      </UserInfoContext.Provider>
    </>
  );
}

export default App;
