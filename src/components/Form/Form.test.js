import { render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

test("koşulların onaylanmasına göre koşulların aktifliği", async () => {
  const user = userEvent.setup();

  render(<Form />);

  const orderBtn = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox", {
    name: "Koşulları okudum ve kabul ediyorum.",
  });

  expect(orderBtn).toBeDisabled();

  expect(checkBox).not.toBeChecked();

  await user.click(checkBox);

  expect(orderBtn).toBeEnabled();

  await user.click(checkBox);

  expect(orderBtn).toBeDisabled();
});

test("onayla butonuna hover olunca bildirim çıkar", async () => {
  const user = userEvent.setup();
  render(<Form />);
  const orderBtn = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox", {
    name: "Koşulları okudum ve kabul ediyorum.",
  });

  await user.click(checkBox);

  await user.hover(orderBtn);

  const popup = screen.getByText("Size gerçekten", { exact: false });

  expect(popup).toBeVisible();

  await user.unhover(orderBtn);

  expect(popup).not.toBeVisible();
});
