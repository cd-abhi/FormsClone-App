import Button from "@material-ui/core/Button/Button";

const MenuButtons = () => {
  return (
    <div className="row submitButtonContainer">
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="submitButton  col-5 m-2"
      >
        Preview
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="submitButton  col-5 m-2"
      >
        Submit
      </Button>
    </div>
  );
};

export default MenuButtons;
