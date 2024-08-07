import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    // After login, navigate to home page
    navigate("/");
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <h1 className="text-3xl">Login</h1>

        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
