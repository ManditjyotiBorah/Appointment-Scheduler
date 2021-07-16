import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog({
  open,
  onChange,
  handleClose,
  data,
  onSubmit
}) {
  function changeHandler(e) {
    onChange({
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <form onSubmit={onSubmit}>
            <TextField
              value={data !== null ? data.text : ""}
              onChange={changeHandler}
              margin="dense"
              name="text"
              fullWidth
            />
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Subscribe
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
