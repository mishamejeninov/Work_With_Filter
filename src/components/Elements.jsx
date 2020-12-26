import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

function Elements(props) {
  function sendData() {
    props.childData();
  }

  return (
    <form noValidate autoComplete="off">
      <Container maxWidth="xs">
        <div>
          <Box m={2}>
            <Button
              onClick={sendData}
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
            >
              Get Info
            </Button>
          </Box>
        </div>
      </Container>
    </form>
  );
}

export default Elements;
