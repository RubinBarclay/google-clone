import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("Home page renders without throwing an error", () => {
  render(<Home />);
});
