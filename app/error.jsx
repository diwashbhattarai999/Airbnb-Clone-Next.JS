"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import EmptyContainer from "./components/EmptyContainer";
import Button from "./components/Button";
import Container from "./components/Container";

const Error = ({ error }) => {
  const router = useRouter();
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <EmptyContainer
          error
          title="Uh Oh, Looks like someone spilled coffee on our servers again"
          subtitle="We'll clean it up and be back soon!"
        />
        <Button
          label="Refresh the page"
          half
          onClick={() => router.refresh()}
        />
      </div>
    </Container>
  );
};

export default Error;
