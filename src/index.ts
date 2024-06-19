import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const service = express();
const Port = process.env.PORT || 3000;

service.listen(Port, () => {
  console.log(`Escuchando servidor en http://localhost:${Port}`);
});

service.get("/soyTA", async (req, res) => {
  try {
    const api = process.env.Api || "no se encuentra api";
    const response = await axios.get(api);
    res.status(200).json(response.data);
  } catch (e) {
    res.status(500).json({ message: "Algo salió mal" });
  }
});
