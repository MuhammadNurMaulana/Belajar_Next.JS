import { retrieveData } from "@/utils/db/service";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await retrieveData("minuman");

  res.status(200).json({ status: true, statusCode: 200, data });
}
