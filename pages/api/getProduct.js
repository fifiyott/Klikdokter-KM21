import {products} from "../../db"

export default async (req, res, next) => {
  try {
    const { method } = req;
    if (method === "GET") {
        return res.status(200).json(products);
    }
    if (method === "POST") {
        const { body } = req;
        products.push({ ...body, id: products.length + 1});
        return res.status(200).json(products);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};