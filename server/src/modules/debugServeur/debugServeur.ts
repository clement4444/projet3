import type { Request, RequestHandler } from "express";
import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

//réccupère un commentaire par son id
const homeDegube: RequestHandler = async (req, res, next) => {
  const env = {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_PORT,
    // DB_PASSWORD: process.env.DB_PORT,
    DB_NAME: process.env.DB_PORT,
  }

  try {
    // a faire
    const query = "SELECT * FROM plateforme;";
    const [rows] = await databaseClient.query(query);

    res.status(200).send({
      message: "parfait !",
      sucssces: true,
      env: env,
      rows: rows,
    });
  } catch (err) {
    res.status(201).send({
      message: "eurreur",
      sucssces: true,
      env: env,
      eurreur: err,
    });
    next(err);
  }
};

export default {
  homeDegube,
};
