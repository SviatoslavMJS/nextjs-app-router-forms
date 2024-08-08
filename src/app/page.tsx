import { schema } from "@/app/registrationSchema";
import { FormValues } from "@/app/types";

import { RegistrationForm } from "./RegistrationForm";

export default function Home() {
  const onDataAction = async (data: FormValues) => {
    "use server";
    const parsed = schema.safeParse(data);

    if (parsed.success) {
      console.log("USer registered.");
      return {
        message: "User registered.",
        user: parsed.data,
      };
    } else {
      return {
        message: "Invalid data.",
        issues: parsed.error?.issues.map((issue) => issue.message),
      };
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <RegistrationForm onDataAction={onDataAction} />
    </div>
  );
}
