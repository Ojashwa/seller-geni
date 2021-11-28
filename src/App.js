import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ImageDropzone from "./ImageDropzone";
import { Preview } from "./Preview";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [isCreateButton, updateCreaeButton] = useState(true);
  const [showPreviewButton, updatePreviewButton] = useState(false);
  const [showPreview, updatePreview] = useState(false);
  const [catName, setCatName] = useState("");
  const [catDetails, setCatDetails] = useState("");
  const [files, updateFiles] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {}, [showPreviewButton, files]);
  const handleButtonClick = (e) => {
    e.preventDefault();
    let data = {
      catName: catName,
      catDetails: catDetails,
      files: files,
    };
    updateFiles([]);
    setCatDetails("");
    setCatName("");
    setCards(...cards, data);
  };
  const handleOnChange = (e) => {
    if (e.target.name === "catname") {
      setCatName(e.target.value);
    } else {
      setCatDetails(e.target.value);
    }
  };
  const handleFiles = (files) => {
    updateFiles(files);
    updatePreviewButton(true);
  };
  const handlePreview = () => {
    updatePreview(!showPreview);
  };
  const getForm = () => {
    return (
      <div style={{ display: "block", width: "100%", padding: "30px" }}>
        <h4>Create card</h4>
        <Form>
          <Form.Group>
            <Form.Label>Catalogue Name</Form.Label>
            <Form.Control
              type="text"
              name="catname"
              placeholder="Enter Catalogue Name"
              onChange={handleOnChange}
              value={catName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Catalogue Description">
            <Form.Label>Catalogue Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="catdetails"
              onChange={handleOnChange}
              value={catDetails}
            />
          </Form.Group>
          <Form.Group>
            <ImageDropzone handleFiles={handleFiles} />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleButtonClick}>
            Click here to save
          </Button>
          {showPreviewButton && (
            <Button
              style={{ marginLeft: "5px" }}
              variant="primary"
              type="button"
              onClick={handlePreview}
            >
              {showPreview ? "Close Preview" : "Preview"}
            </Button>
          )}
        </Form>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {isCreateButton ? (
          <button
            className="button"
            onClick={() => {
              updateCreaeButton(!isCreateButton);
            }}
          >
            Create catalogue
          </button>
        ) : (
          <div className="wrapper">
            {getForm()}
            {showPreview && (
              <div style={{ display: "block", width: "100%", padding: "30px" }}>
                <Preview
                  previewData={{
                    catName: catName,
                    catDetails: catDetails,
                    files: files,
                  }}
                />
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
