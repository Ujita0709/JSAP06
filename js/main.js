import { MemberService } from "./services/memberService.js";
import { renderMemberTable, showMessage } from "./ui/render.js";

// --- 初期化 ---
const service = new MemberService();

const form = document.getElementById("member-form");
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const tbody = document.getElementById("member-table-body");
const messageElm = document.getElementById("message");

// 会員一覧を再描画
function refresh() {
  const members = service.getAll();
  renderMemberTable(tbody, members, handleDelete);
}

// 削除ボタンが押されたとき
function handleDelete(id) {
  const ok = service.removeById(id);
  if (ok) {
    showMessage(messageElm, `ID=${id} を削除しました`, "success");
    refresh();
  } else {
    showMessage(messageElm, `ID=${id} は見つかりませんでした`, "error");
  }
}

// フォーム送信時（会員追加）
form.addEventListener("submit", e => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = Number(ageInput.value);

  if (!name || Number.isNaN(age)) {
    showMessage(messageElm, "名前と年齢を正しく入力してください", "error");
    return;
  }

  service.add(name, age);
  showMessage(messageElm, `${name} さんを追加しました`, "success");

  // 入力欄をクリア
  nameInput.value = "";
  ageInput.value = "";

  refresh();
});

// 最初の描画
refresh();