import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../components/card";

afterEach(cleanup);

test("should render profile card", () => {
  const data = {
    id: 1,
    name: "Mark Lovejoy",
    about:
      "Software developer at Deloitte. When not coding, I like to play games and stream on Twitch.",
  };
  render(<Card data={data} />);
  const cardElement = screen.getByTestId("card-1");
  expect(cardElement).toBeInTheDocument();
  expect(cardElement).toHaveTextContent("Mark Lovejoy");
});
