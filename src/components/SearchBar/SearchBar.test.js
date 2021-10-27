import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

test("Clear search button only shows when text has been typed", async () => {
  render(<SearchBar />);

  const inputField = screen.getByRole("textbox");

  // Clear button is initially not rendered
  expect(screen.queryByLabelText("Clear search box")).toBeNull();

  // Button shows when text is entered in search box
  userEvent.type(inputField, "Test text");
  const clearButton = await screen.findByLabelText("Clear search box");
  expect(clearButton).toBeInTheDocument();

  // Button disappears when text is removed
  userEvent.clear(inputField);
  expect(screen.queryByLabelText("Clear search box")).toBeNull();
});

test("Search box clears when clear button is clicked", async () => {
  render(<SearchBar />);

  const inputField = screen.getByRole("textbox");

  // Write text in search bar
  userEvent.type(inputField, "Test text");
  expect(inputField).toHaveValue("Test text");

  // Wait for clear button to appear then click it
  const clearButton = await screen.findByLabelText("Clear search box");
  userEvent.click(clearButton);

  // Test that search box is empty and clear button disappears
  expect(inputField).toHaveValue("");
  expect(screen.queryByLabelText("Clear search box")).toBeNull();
});
