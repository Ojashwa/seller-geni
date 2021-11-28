import { Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const textStyle = {
  color: "black",
};
export const Preview = (props) => {
  let imgSrc;
  if (props.previewData.files.length > 0) {
   props.previewData.files.some((item, i) => {
      if (item.type.includes("image") && imgSrc === undefined) {
        imgSrc = item.preview;
        return true
      }
      return false;
    });
  }
  return (
    <div>
      <Card style={{ width: "100%", height: "auto" }}>
        {imgSrc && <Image src={imgSrc} thumbnail />}
        <Card.Body>
          <Card.Title style={textStyle}>{props.previewData.catName}</Card.Title>
          <Card.Text style={textStyle}>
            {props.previewData.catDetails}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
