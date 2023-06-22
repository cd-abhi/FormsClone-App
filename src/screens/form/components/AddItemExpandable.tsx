import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Item } from "../../../app_constants/interfaces";
import { ItemType } from "../../../app_constants/enums";

const AddItemExpandable = (props: { values: any; addItemToFormData: any }) => {
  const { values, addItemToFormData } = props;
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleItemClick = (type: ItemType) => {
    setExpanded(false);
    const item: Item = {
      title: "sample title",
      description: "sample description",
      type: type,
    };
    addItemToFormData({ item });
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleToggle}
        style={{ marginRight: "10px" }}
      >
        <AddIcon /> Insert new
      </Button>
      {expanded && (
        <div
          className="expandable-list"
          style={{ transition: "width 0.3s", overflow: "hidden" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleItemClick(ItemType.Text)}
          >
            Text
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "10px" }}
            onClick={() => handleItemClick(ItemType.Date)}
          >
            Date
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddItemExpandable;
