import { useState } from "react";
import FolderUI from "./components/FolderUI";
import explorer from "./JSON-Data/JSON-Data";
import "./styles.css";

export default function App() {
  const [docs, setDocs] = useState(explorer);

  return (
    <div className="App not__selectable" style={{ margin: "0 2rem" }}>
      <h4>Sidebar File Explorer</h4>
      <FolderUI docs={docs} />
      {docs.items.map((doc) => console.log(doc.id))}
    </div>
  );
}
