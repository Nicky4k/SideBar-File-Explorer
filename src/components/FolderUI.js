import { useState } from "react";

function FolderUI({ docs }) {
  const [folderOpen, setFolderOpen] = useState(false);
  const [showEditTools, setShowEditTools] = useState(false);

  const toggleFolderIconHandler = (e) => {
    if (e.target.nodeName === "SECTION") {
      setFolderOpen(!folderOpen);
    }
  };
  return (
    <section
      style={{
        display: "flex",
        maxHeight: "1.5rem",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 1.5rem",
        backgroundColor: "black",
        borderRadius: "0.25rem",
        cursor: "pointer"
      }}
      onClick={toggleFolderIconHandler}
      onMouseEnter={(e) => {
        setShowEditTools(!showEditTools);
      }}
      onMouseLeave={(e) => {
        setShowEditTools(!showEditTools);
      }}
    >
      <article className="not__selectable">
        {folderOpen ? "📂 " : "📁 "} {docs.name}
      </article>
      {showEditTools && (
        <figure style={{ marginRight: 0 }} className="not__selectable">
          <button className="btn_styles">✏️</button>
          <button className="btn_styles">📄</button>
          <button className="btn_styles">🗂</button>
          <button className="btn_styles">❌</button>
        </figure>
      )}
    </section>
  );
}

export default FolderUI;
