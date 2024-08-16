/**
 * The main entry point of the React application.
 * Renders the `UserProfileContainer` component, which is the root component for the user profile functionality.
 */
import "./App.css";
import UserProfileContainer from "./components/UserProfileContainer";

function App() {
  return (
    <div className="App">
      <UserProfileContainer />
    </div>
  );
}

export default App;
