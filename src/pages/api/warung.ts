import { retrieveData } from "@/utils/db/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await retrieveData("warung");
  res.status(200).json({ status: true, statusCode: 200, data });
}
