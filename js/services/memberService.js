import { Member } from "../models/member.js";

// 会員データを管理するクラス
export class MemberService {
  constructor() {
    // 初期データ
    this.members = [
      new Member(1, "山田太郎", 25),
      new Member(2, "佐藤花子", 30),
    ];
    this.nextId = 3;
  }

  // 全会員を返す（コピー）
  getAll() {
    return [...this.members];
  }

  // 会員を追加
  add(name, age) {
    const member = new Member(this.nextId++, name, age);
    this.members.push(member);
    return member;
  }

  // IDで削除
  removeById(id) {
    const index = this.members.findIndex(m => m.id === id);
    if (index !== -1) {
      this.members.splice(index, 1);
      return true;
    }
    return false;
  }
}