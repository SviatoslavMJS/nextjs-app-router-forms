import { z } from "zod";

import { schema } from "./registrationSchema";

export type FormValues = z.infer<typeof schema>;

export type ReturnValue = {
  message: string;
  user?: FormValues;
  issues?: string[];
};
