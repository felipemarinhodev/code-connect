'use client';

import { useFormStatus } from "react-dom";
import { Button } from "../Button";
import { Spinner } from "../Spinner";
import { ArrowForward } from "../icons/ArrowForward";

export type SubmitButtonProps = {
  children: string;
}

export const SubmitButton = ({ children }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button aria-disabled={pending} type="submit">
      {pending ? <Spinner /> : <>{children} <ArrowForward /> </>}
    </Button>
  );
}
