// "use client";

import Button from "./Button";
import Container from "./Container";

export default function Hosting() {
  return (
    <Container>
      <div
        className="relative p-16 mb-12 md:p-24 bg-top flex flex-col items-start rounded-xl text-white"
        style={{
          background: "url('/assets/hosting.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <span className="z-0 absolute left-0 top-0 w-full h-full bg-gradient-to-r from-gray-700 to-transparent rounded-xl" />
        <h2 className="z-50 text-4xl lg:text-5xl  font-bold mb-6">Try hosting</h2>
        <p className="z-50 text-lg mb-6 max-w-sm md:max-w-md">
          Earn extra income and unlock new oppurtunities by sharing your space.
        </p>
        <Button outline half label="Learn More" />
      </div>
    </Container>
  );
}
