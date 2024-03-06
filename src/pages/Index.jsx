import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button, Checkbox, useToast } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const toast = useToast();

  const handleLogin = () => {
    const token = generateJwtToken(email, password, rememberMe);
    // In a real app, you would set a cookie here. For demonstration, we just log to the console.
    console.log(`JWT Token: ${token}`);
    console.log(`Remember Me: ${rememberMe}`);
    toast({
      title: "Logged In",
      description: "You have successfully logged in.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  // A fake JWT token generator for demonstration purposes
  const generateJwtToken = (email, password, rememberMe) => {
    const expiry = rememberMe ? "7d" : "1h"; // 7 days or 1 hour
    return `fake_jwt_token_for_${email}_expiring_in_${expiry}`;
  };

  return (
    <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" margin="auto" mt={12}>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      </FormControl>

      <FormControl id="password" mt={4} isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
      </FormControl>

      <Checkbox mt={4} isChecked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}>
        Remember me
      </Checkbox>

      <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="solid" mt={4} onClick={handleLogin} isFullWidth>
        Sign In
      </Button>
    </Box>
  );
};

export default Index;
