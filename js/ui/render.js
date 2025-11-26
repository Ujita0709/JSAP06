export function renderMemberTable(tbodyElm, members, onDelete) {
  // いったん中身をクリア
  tbodyElm.innerHTML = "";

  for (const member of members) {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = member.id;

    const tdName = document.createElement("td");
    tdName.textContent = member.name;

    const tdAge = document.createElement("td");
    tdAge.textContent = member.age;

    const tdAction = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "削除";
    button.addEventListener("click", () => {
      onDelete(member.id); // 削除ボタンが押されたときの処理を呼ぶ
    });
    tdAction.appendChild(button);
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdAction);

    tbodyElm.appendChild(tr);
  }
}

// メッセージ表示
export function showMessage(messageElm, text, type = "info") {
  if (!text) {
    messageElm.textContent = "";
    return;
  }
  messageElm.textContent = text;

  // ここでは単純に種類によって色だけ変える
  if (type === "error") {
    messageElm.style.color = "red";
  } else if (type === "success") {
    messageElm.style.color = "green";
  } else {
    messageElm.style.color = "black";
  }
}