import { user } from "../../db";

export default async (req, res) => {
  try {
      const { username, password } = req.body;
      const users = { username, password };
    // mock retrieval of a real DB with async/await
  if (username === user.username && password === user.password) {
  res.status(200).send({message: "success", token: "asdfghjkl"})
  users.push(user);
} else { 
  res.status(400).send({message: "Not match"})
}
    
  } catch (err) {
    res.status(500).send(err);
  }
};