import { user } from "../../db";

export default async (req, res) => {
  try {
      const { username, password } = req.body;
    // mock retrieval of a real DB with async/await
  if (username === user.superadmin.username && password === user.superadmin.password) {
  res.status(200).send({msg: "success", token: "asdfghjkl"})
} else { 
  res.status(400).send({msg: "Not match"})
}
    
  } catch (err) {
    res.status(500).send(err);
  }
};