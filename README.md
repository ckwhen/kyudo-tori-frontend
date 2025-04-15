# KYUDO TORI FRONTEND

> Kyudo Tori 前端模組  
> 建構一個簡潔且易於使用的查詢介面，讓弓道學習者能快速檢索日本各地的審查資訊

---

## 專案相關連結

- [kyudo-tori-backend](https://github.com/ckwhen/kyudo-tori-backend)：提供爬蟲與 API 的後端模組

## 開發目標

Kyudo Tori 前端專案旨在提供：
- 簡潔、直覺的使用者介面
- 快速搜尋與篩選審查資訊
- 清晰的結果呈現（時間、地點、主辦單位、審查段位）
- 可於電腦與手機裝置上使用（RWD）

---

## 技術規劃

| 項目         | 技術                           |
|--------------|--------------------------------|
| Frameworks | React |
| UI | Tailwind CSS |
| API 通訊     | Axios |
| 狀態管理     | React Context / Zustand（視需要 |
| Routing      | Next.js Router |
| 建構工具     | Next.js |
| 測試工具     | Jest |
| 型別, Coding Style 管理     | TypeScript / ESLint: Airbnb |

---

## 頁面架構

1. **首頁（Landing Page）**
   - 介紹 Kyudo Tori 的功能與用途
   - 提供進入查詢頁的入口按鈕或快速查詢

2. **審查查詢頁（Search Page）**
   - 地區選擇（下拉選單或分區按鈕）
   - 關鍵字搜尋（主辦單位 / 地點）
   - 日期篩選（年、月）
   - 查詢結果列表（可展開細節）

3. **審查詳情頁（Detail Page）**
   - 顯示完整公告內容（時間、地點、主辦、等級、PDF 連結等）
   - 可直接複製資訊 / 分享連結

---

## 未來發展
- 支援多語系（i18n）
- 搜尋結果可下載為 CSV / PDF
- 支援審查公告訂閱 / 通知（需要會員系統）
