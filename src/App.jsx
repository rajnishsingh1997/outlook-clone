import { useEffect, useState } from 'react';
import './App.css';
import UserData from './components/userdata';

const API = "https://flipkart-email-mock.now.sh/";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // Accessing the `list` property where the emails are stored
      if (data && data.list) {
        setUsers(data.list);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <section>
      <div className="header-body">
          <ul>
            <li>Filter By </li>
            <li onClick={() => setFilter('unread')}>Unread</li>
            <li onClick={() => setFilter('read')}>Read</li>
            <li onClick={() => setFilter('favorites')}>Favorites</li>
          </ul>
        </div>
        <div className="banner full-body">
          <div className="subject-body">
            {/* Pass the `users` state to `UserData` component */}
            <UserData users={users} />
          </div>
        </div>
       
      </section>
    </>
  );
}

export default App;
