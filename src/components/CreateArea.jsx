import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [zoomStatus, updateZoomStatus] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    updateZoomStatus(false);
  }

  function displayCreateArea() {
    updateZoomStatus((prevValue) => !prevValue);
  }

  return (
    <>
      {!zoomStatus ? (
        <div onClick={displayCreateArea}>
          <form className="create-note">
            <input name="title" placeholder="Note Here..." />
          </form>
        </div>
      ) : (
        <div>
          <Zoom in={true}>
            <form className="create-note">
              <input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
              />
              <textarea
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows="3"
              />
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </form>
          </Zoom>
        </div>
      )}
    </>
  );
}

export default CreateArea;
