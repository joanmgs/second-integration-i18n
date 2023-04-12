import { NextApiRequest, NextApiResponse } from "next";
import { ProductsAPIResponse } from "../../../types";
import { defaultLocale, locales } from "../../../locale/constants";
import { products } from "../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsAPIResponse>
) {
  const lan = req.query.lan as string;
  const language = Object.values(locales).includes(lan) ? lan : defaultLocale;

  res.status(200).json(products[language]);
}
