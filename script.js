const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  const total = [...prices].reduce(
    (sum, cell) => sum + Number(cell.textContent.trim()),
    0
  );

  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = 2;
  cell.textContent = `Total Price: Rs ${total}`;
  row.appendChild(cell);

  document.querySelector("table").appendChild(row);
};
  


getSumBtn.addEventListener("click", getSum);

