import React from "react";

import {
  fireEvent,
  render,
  waitForElement,
  wait
} from "@testing-library/react";

import Todo from "./Todo";

describe("Test form Todo component", () => {
  it("Should add new task when form has been submitted", async () => {
    const { getByTestId, getByText } = render(<Todo />); // renderizar o componente
    const newTask = "testing"; // Valor do Input

    const fieldNode = await waitForElement(() => getByTestId("form-field")); // buscar o input

    fireEvent.change(fieldNode, { target: { value: newTask } }); // digitar no input
    expect(fieldNode.value).toEqual(newTask);

    const btnNode = await waitForElement(() => getByTestId("form-btn")); // buscar o botao

    fireEvent.click(btnNode); // clicar no botao

    const tdNode = await waitForElement(() => getByText(newTask)); // buscar na tabela
    expect(tdNode).toBeDefined(); // verificar se a tarefa foi adicionada na tabela

    // nao precisa buscar com id so passar getByText
    // const tableNode = await waitForElement(() => getByTestId("data-table"));
  });
});
