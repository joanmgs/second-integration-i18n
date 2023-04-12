import { NextApiRequest, NextApiResponse } from "next";
import { TyCsAPIResponse } from "../../../types";
import { defaultLocale, locales } from "../../../locale/constants";
import { tycs } from "../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TyCsAPIResponse>
) {
  const lan = req.query.lan as string;
  const language = Object.values(locales).includes(lan) ? lan : defaultLocale;

  res.status(200).json(tycs[language]);
}
