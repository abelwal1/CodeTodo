import type { NextApiRequest, NextApiResponse } from "next";
import { validator } from "../../src/utils/common";

import generateMockAddresses from "../../src/utils/generateMockAddresses";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { postcode, streetnumber },
  } = req;
  const errorMessage = validator(postcode as string, streetnumber as string);
  if (errorMessage) {
    return res.status(400).send({
      status: "error",
      errormessage: errorMessage,
    });
  }

  const mockAddresses = generateMockAddresses(
    postcode as string,
    streetnumber as string
  );
  if (mockAddresses) {
    return res.status(200).json({
      status: "ok",
      details: mockAddresses,
    });
  }

  return res.status(404).json({
    status: "error",
    errormessage: "No results found!",
  });
}
