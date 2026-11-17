import "./App.css";
import { AuthForm } from "./components/AuthForm";
import { FetchNotesListView } from "./components/NotesListView/FetchNotesListView";

function App() {
  return (
    <div className="app">
      <FetchNotesListView />
      <AuthForm />
    </div>
  );
}

export default App;
