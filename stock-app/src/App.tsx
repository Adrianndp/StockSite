import Navbar from "./components/Navbar";
import Main from "./components/Main";
import HomeIcon from "@mui/icons-material/Home";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Welcome to Adrian App{" "}
        <HomeIcon style={{ fontSize: 50, color: "blue" }} />
      </Typography>
      <Typography variant="body1">
        <Main />
      </Typography>
    </Container>
  );
};

export default App;
