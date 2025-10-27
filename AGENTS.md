# AGENTS.md - AI 協作開發文件
# 家庭食材配對食譜系統

> **目的**: 此文件記錄專案的完整狀態、進度、決策和待辦事項，確保任何 AI Agent 都能無縫接手並繼續開發。

---

## 📋 專案總覽

### 專案資訊
- **專案名稱**: 家庭食材配對食譜系統 (Recipe Matcher)
- **專案類型**: 食譜推薦應用
- **開發方法**: Test-Driven Development (TDD)
- **當前階段**: 規劃階段 (Plan Mode)
- **建立日期**: 2025-10-27
- **最後更新**: 2025-10-27

### 核心概念
使用者選擇家中現有的食材 → 系統自動匹配並推薦可製作的食譜 → 減少思考三餐的時間

### 目標使用者
經常在家自己做飯的人，他們的痛點是需要花大量時間思考三餐要煮什麼。

---

## 📊 當前狀態

### ✅ 已完成項目
- [x] PRD.md 初版完成
  - 日期: 2025-10-27
  - 內容: 完整的產品需求文件，包含核心功能、技術需求、MVP 範圍
  - 版本: 1.0
  
- [x] PRD.md 優化與增強
  - 日期: 2025-10-27
  - 優化內容:
    - 增加食材分類詳細列表（7 大類）
    - 補充匹配演算法詳細說明和公式
    - 完善食譜詳細資訊頁面規格
    - 提供 JSON 格式的資料結構示例
    - 增加 CRUD 操作詳細定義
    - 優化使用流程說明（8 個清晰步驟）
    - 補充介面設計原則的具體實現
    - 完善 KPI 和品質指標表格
  - 版本: 1.1

- [x] AGENTS.md 建立
  - 日期: 2025-10-27
  - 目的: 追蹤專案進度，便於 AI 協作
  - 內容: 完整的專案狀態、決策記錄、待辦事項

- [x] PRD.md 補充食譜管理功能 (v1.2)
  - 日期: 2025-10-27
  - 新增內容:
    - 新增「2.5 食譜管理功能」- 前端新增/編輯/刪除食譜
    - 詳細的新增食譜流程和表單驗證規則
    - 食譜來源管理 (built-in 唯讀 vs user 可編輯)
    - 前端表單的驗收標準
    - 更新 MVP Phase 1 包含食譜管理功能
  - 版本: 1.2

### 🔄 進行中項目
- [ ] AGENTS.md 補充實現細節 (進行中)
  - 更新內容: 前端食譜管理的 API 設計、表單 UI 規格、資料流程

### ⏳ 待辦事項（按優先級排序）

#### Priority 0 - 規劃階段
1. [ ] **技術選型決策**
   - 前端技術棧選擇
   - 後端技術棧選擇
   - 資料庫選擇
   - 理由: 需要確定技術方向才能開始開發

2. [ ] **資料庫架構設計**
   - 設計食譜資料表結構
   - 設計食材資料表結構
   - 定義資料關聯關係
   - 撰寫資料庫設計文件

3. [ ] **API 設計**
   - 定義 API 端點
   - 設計請求/回應格式
   - 撰寫 API 文件

#### Priority 1 - 開發準備
4. [ ] **專案初始化**
   - 建立專案目錄結構
   - 初始化版本控制 (Git)
   - 設定開發環境
   - 安裝必要依賴套件

5. [ ] **測試框架設定**
   - 選擇測試框架
   - 設定測試環境
   - 建立測試範例

#### Priority 2 - MVP 開發 (Phase 1)
6. [ ] **食材資料模型 (TDD)**
   - 撰寫測試: 食材 CRUD
   - 實作: 食材資料結構
   - 測試驗證

7. [ ] **食譜資料模型 (TDD)**
   - 撰寫測試: 食譜 CRUD
   - 實作: 食譜資料結構
   - 測試驗證

8. [ ] **食譜匹配演算法 (TDD)**
   - 撰寫測試: 各種匹配情境
   - 實作: 匹配邏輯
   - 測試驗證

9. [ ] **前端介面開發**
   - 食材選擇介面
   - 食譜列表顯示
   - 食譜詳細頁面

10. [ ] **整合測試**
    - 端對端測試
    - 使用者流程測試

---

## 🏗️ 技術架構（待定）

### 需要決策的項目
- **前端**: React / Vue / Angular / 原生 HTML+JS
- **後端**: Node.js / Python / Java / C# / Go
- **資料庫**: PostgreSQL / MySQL / MongoDB / SQLite
- **部署平台**: 本地 / 雲端 (AWS/Azure/GCP) / Heroku

### 建議考量因素
1. **開發速度**: 選擇熟悉的技術可加快開發
2. **可擴展性**: 考慮未來功能擴充需求
3. **資料庫選擇**: 
   - SQL: 適合結構化資料、複雜查詢
   - NoSQL: 適合彈性 schema、快速開發
4. **測試支援**: 選擇有良好測試工具的技術棧

---

## 📐 資料結構（詳細定義）

### 食材 (Ingredient)
```json
{
  "id": "ing_001",
  "name": "番茄",
  "category": "蔬菜",
  "aliases": ["西紅柿", "蕃茄"],
  "defaultUnit": "顆",
  "createdAt": "2025-10-27",
  "updatedAt": "2025-10-27"
}
```
**說明**:
- `id`: 唯一識別碼
- `name`: 食材標準名稱
- `category`: 分類（蔬菜/肉類/海鮮/蛋類/乳製品/調味料/乾貨）
- `aliases`: 別名清單（用於搜尋和匹配）
- `defaultUnit`: 預設計量單位（個/克/湯匙等）

### 食譜 (Recipe)
```json
{
  "id": "recipe_001",
  "name": "番茄炒雞蛋",
  "category": "中式/快炒",
  "difficulty": "簡單",
  "cookingTime": 15,
  "servings": 2,
  "ingredients": [
    {
      "ingredientId": "ing_egg",
      "name": "雞蛋",
      "amount": 3,
      "unit": "個"
    },
    {
      "ingredientId": "ing_tomato",
      "name": "番茄",
      "amount": 2,
      "unit": "顆"
    },
    {
      "ingredientId": "ing_oil",
      "name": "食用油",
      "amount": 2,
      "unit": "湯匙"
    },
    {
      "ingredientId": "ing_salt",
      "name": "鹽",
      "amount": 0.5,
      "unit": "茶匙",
      "isOptional": false,
      "isCommon": true
    }
  ],
  "steps": [
    "將雞蛋打入碗中，加鹽打散",
    "番茄洗淨切成塊狀",
    "熱鍋下油，待油熱後倒入雞蛋液，炒至半熟時盛出",
    "鍋中再下油，放入番茄塊炒出湯汁",
    "將炒好的雞蛋倒回，混合炒均勻，調味即可"
  ],
  "tips": "蛋要炒至半熟再加番茄，保持蛋的鬆軟口感，番茄要炒出湯汁才能更好地調味",
  "createdAt": "2025-10-27",
  "updatedAt": "2025-10-27"
}
```
**說明**:
- `id`: 唯一識別碼
- `name`: 食譜名稱
- `category`: 菜系/烹飪方式分類
- `difficulty`: 難度等級（簡單/中等/困難）
- `cookingTime`: 預計烹飪時間（分鐘）
- `servings`: 份量（人份）
- `ingredients`: 食材陣列
  - `ingredientId`: 關聯食材的 ID
  - `amount`: 用量數字
  - `unit`: 計量單位
  - `isCommon`: 是否為常見食材（影響匹配計算）
- `steps`: 烹飪步驟陣列
- `tips`: 烹飪小貼士

### 匹配結果 (MatchResult)
```json
{
  "recipeId": "recipe_001",
  "name": "番茄炒雞蛋",
  "matchRate": 100,
  "hasAllIngredients": true,
  "missingIngredients": [],
  "missingCount": 0,
  "requiredCount": 5
}
```
**說明**:
- `recipeId`: 食譜 ID
- `matchRate`: 匹配度百分比 (0-100%)
- `hasAllIngredients`: 是否擁有全部食材
- `missingIngredients`: 缺少的食材清單
- `missingCount`: 缺少食材的數量
- `requiredCount`: 食譜所需的總食材數

### 使用者選擇 (UserSelection)
```json
{
  "timestamp": "2025-10-27T10:30:00Z",
  "selectedIngredientIds": ["ing_egg", "ing_tomato", "ing_oil"],
  "selectedIngredients": [
    { "id": "ing_egg", "name": "雞蛋" },
    { "id": "ing_tomato", "name": "番茄" },
    { "id": "ing_oil", "name": "食用油" }
  ],
  "matchResults": [
    { "recipeId": "recipe_001", "matchRate": 100 },
    { "recipeId": "recipe_002", "matchRate": 80 }
  ]
}
```
**說明**:
- 記錄使用者選擇的食材和匹配結果
- 用於追蹤使用流程和系統表現

---

## 🎨 前端食譜管理 UI 設計

### 「新增食譜」表單結構

**表單頁面佈局**:
```
┌─────────────────────────────────────────────┐
│         新增食譜                             │
├─────────────────────────────────────────────┤
│ 1️⃣  基本資訊                                 │
│   ├─ 食譜名稱 [輸入框] * 必填               │
│   ├─ 分類 [下拉選單] * 必填                 │
│   ├─ 難度等級 [單選按鈕] * 必填             │
│   └─ 小貼士 [文字區域] (選填)               │
│                                             │
│ 2️⃣  烹飪資訊                                 │
│   ├─ 烹飪時間 [輸入框] 分鐘 * 必填          │
│   └─ 份量 [輸入框] 人份 * 必填              │
│                                             │
│ 3️⃣  食材清單                                 │
│   ├─ [+ 新增食材按鈕]                       │
│   ├─ 食材 1 [下拉] × 數量 [輸入框] [刪除]   │
│   ├─ 食材 2 ...                             │
│   └─ 食材 N ...                             │
│                                             │
│ 4️⃣  烹飪步驟                                 │
│   ├─ [+ 新增步驟按鈕]                       │
│   ├─ 步驟 1 [文字區域] [刪除]                │
│   ├─ 步驟 2 ...                             │
│   └─ 步驟 N ...                             │
│                                             │
│ [保存] [取消] [清空表單]                   │
└─────────────────────────────────────────────┘
```

### 前端表單驗證規則

| 欄位 | 驗證規則 | 錯誤訊息 |
|------|---------|---------|
| 食譜名稱 | 3-100 字元，非空 | 「食譜名稱需 3-100 字元」 |
| 分類 | 必選 | 「請選擇分類」 |
| 難度等級 | 必選 | 「請選擇難度等級」 |
| 烹飪時間 | 1-999 的正整數 | 「烹飪時間需 1-999 分鐘」 |
| 份量 | 1-20 的正整數 | 「份量需 1-20 人份」 |
| 食材清單 | 至少 1 個食材 | 「至少需 1 個食材」 |
| 食材用量 | 正數 | 「用量需為正數」 |
| 烹飪步驟 | 至少 1 個步驟 | 「至少需 1 個烹飪步驟」 |

### 前端互動流程

```
使用者點擊「新增食譜」
  ↓
進入表單頁面（空白表單或預填資料）
  ↓
填寫基本資訊（名稱、分類、難度、時間、份量）
  ↓
新增食材（可多次操作）
  ├─ 點擊「+ 新增食材」按鈕
  ├─ 選擇食材（下拉列表或搜尋功能）
  ├─ 輸入用量和選擇單位
  ├─ 按「確認」添加到清單
  └─ 重複直到完成所有食材
  ↓
新增烹飪步驟（可多次操作）
  ├─ 點擊「+ 新增步驟」按鈕
  ├─ 在文字區域輸入步驟說明
  ├─ 按「確認」添加到清單
  └─ 重複直到完成所有步驟
  ↓
(可選) 在小貼士欄位輸入烹飪建議
  ↓
點擊「保存」按鈕
  ↓
前端驗證表單資料
  ├─ 如果有驗證錯誤
  │  ├─ 顯示紅色錯誤訊息
  │  ├─ 高亮錯誤欄位
  │  └─ 停止提交
  └─ 如果驗證通過 → 繼續
  ↓
調用後端 API: POST /api/recipes
  ↓
顯示「正在保存...」加載狀態
  ↓
後端驗證並保存到資料庫
  ↓
返回成功訊息 + 新食譜 ID
  ↓
顯示「食譜新增成功」提示
  ↓
跳轉回食譜列表頁面
  ↓
新增的食譜立即出現在清單中
```

---

## 🔌 API 設計 - 食譜管理端點

### 基本資訊
- **基礎 URL**: `/api/recipes`
- **認證**: 暫不需要 (MVP 階段)
- **回應格式**: JSON
- **錯誤處理**: 統一的錯誤回應格式

### API 端點清單

#### 1. 獲取所有食譜
```
GET /api/recipes
```

**回應** (200 OK):
```json
{
  "success": true,
  "data": [
    {
      "id": "recipe_builtin_001",
      "name": "番茄炒雞蛋",
      "source": "built-in",
      "category": "中式/快炒",
      "difficulty": "簡單",
      "cookingTime": 15,
      "servings": 2,
      "ingredientCount": 4,
      "isEditable": false
    },
    {
      "id": "recipe_user_001",
      "name": "我家的番茄湯",
      "source": "user",
      "category": "湯品",
      "difficulty": "簡單",
      "cookingTime": 20,
      "servings": 3,
      "ingredientCount": 3,
      "isEditable": true
    }
  ]
}
```

#### 2. 獲取單一食譜詳細資訊
```
GET /api/recipes/:id
```

**回應** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "recipe_001",
    "name": "番茄炒雞蛋",
    "source": "user",
    "author": "jyang",
    "category": "中式/快炒",
    "difficulty": "簡單",
    "cookingTime": 15,
    "servings": 2,
    "ingredients": [
      { "name": "雞蛋", "amount": 3, "unit": "個" },
      { "name": "番茄", "amount": 2, "unit": "顆" }
    ],
    "steps": ["步驟 1", "步驟 2", "..."],
    "tips": "蛋要炒至半熟",
    "isEditable": true,
    "createdAt": "2025-10-27",
    "updatedAt": "2025-10-27"
  }
}
```

**錯誤** (404 Not Found):
```json
{
  "success": false,
  "error": "食譜不存在"
}
```

#### 3. 新增食譜 ⭐
```
POST /api/recipes
Content-Type: application/json
```

**請求體**:
```json
{
  "name": "我家的番茄湯",
  "category": "湯品",
  "difficulty": "簡單",
  "cookingTime": 20,
  "servings": 3,
  "ingredients": [
    { "name": "番茄", "amount": 3, "unit": "顆" },
    { "name": "洋蔥", "amount": 1, "unit": "顆" },
    { "name": "清水", "amount": 1000, "unit": "ml" }
  ],
  "steps": [
    "番茄和洋蔥切塊",
    "熱水燒開後放入蔬菜",
    "煮 15 分鐘即可"
  ],
  "tips": "番茄要選新鮮的"
}
```

**回應** (201 Created):
```json
{
  "success": true,
  "message": "食譜新增成功",
  "data": {
    "id": "recipe_user_001",
    "name": "我家的番茄湯",
    "source": "user",
    "category": "湯品",
    "difficulty": "簡單",
    "createdAt": "2025-10-27T10:30:00Z"
  }
}
```

**錯誤** (400 Bad Request):
```json
{
  "success": false,
  "error": "資料驗證失敗",
  "errors": {
    "name": "食譜名稱不能為空",
    "ingredients": "至少需要 1 個食材"
  }
}
```

#### 4. 編輯食譜 ⭐
```
PUT /api/recipes/:id
Content-Type: application/json
```

**請求體**: (同新增食譜)

**回應** (200 OK):
```json
{
  "success": true,
  "message": "食譜更新成功",
  "data": { ... }
}
```

**錯誤** (403 Forbidden):
```json
{
  "success": false,
  "error": "無法編輯系統預設食譜"
}
```

#### 5. 刪除食譜 ⭐
```
DELETE /api/recipes/:id
```

**回應** (200 OK):
```json
{
  "success": true,
  "message": "食譜刪除成功"
}
```

**錯誤** (403 Forbidden):
```json
{
  "success": false,
  "error": "無法刪除系統預設食譜"
}
```

### API 請求範例 (JavaScript/Fetch)

```javascript
// 新增食譜
async function addRecipe(recipeData) {
  const response = await fetch('/api/recipes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipeData)
  });
  return await response.json();
}

// 編輯食譜
async function updateRecipe(id, recipeData) {
  const response = await fetch(`/api/recipes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipeData)
  });
  return await response.json();
}

// 刪除食譜
async function deleteRecipe(id) {
  const response = await fetch(`/api/recipes/${id}`, {
    method: 'DELETE'
  });
  return await response.json();
}
```

---

## 🧪 TDD 開發流程詳解

### 標準 Red-Green-Refactor 流程

#### Phase 1: Red 🔴
1. 分析需求，確定單一測試用例
2. 撰寫失敗的測試程式碼
   - 測試應該聚焦於一個小功能點
   - 測試應該清晰表達預期行為
3. 執行測試，確認失敗
4. 檢視失敗原因

#### Phase 2: Green 🟢
1. 撰寫**最少程式碼**使測試通過
   - 不要過度設計
   - 可以先用最簡單的實作
2. 執行所有測試，確認全部通過
3. 不修改任何功能代碼

#### Phase 3: Refactor 🔵
1. 改進程式碼品質（在測試保護下）
   - 消除重複代碼
   - 改進命名和結構
   - 優化效能
2. 執行所有測試，確認仍然通過
3. 提交代碼

### 測試類型與範例

#### 單元測試 (Unit Test)
**目標**: 測試單一函數或方法
```
例: 測試匹配度計算函數

Test Case: 完全匹配
- Input: 使用者選擇 [雞蛋, 番茄, 油], 食譜需要 [雞蛋, 番茄, 油]
- Expected Output: matchRate = 100, hasAllIngredients = true

Test Case: 部分匹配
- Input: 使用者選擇 [雞蛋, 番茄], 食譜需要 [雞蛋, 番茄, 油, 鹽]
- Expected Output: matchRate = 50, hasAllIngredients = false

Test Case: 缺少所有食材
- Input: 使用者選擇 [牛肉], 食譜需要 [雞蛋, 番茄, 油]
- Expected Output: matchRate = 0, hasAllIngredients = false
```

#### 整合測試 (Integration Test)
**目標**: 測試多個模組的互動
```
例: 測試食譜匹配流程

Test Scenario:
1. 新增食材到資料庫
2. 新增食譜到資料庫
3. 使用者選擇食材
4. 系統搜尋匹配食譜
5. 驗證返回正確的食譜列表
```

#### 端對端測試 (E2E Test)
**目標**: 測試完整使用者流程
```
例: 完整使用流程測試

Test Scenario:
1. 使用者進入應用
2. 使用者選擇食材 [雞蛋, 番茄, 洋蔥]
3. 點擊搜尋按鈕
4. 驗證能找到「番茄炒雞蛋」
5. 點擊該食譜
6. 驗證能看到完整烹飪指南
7. 驗證烹飪步驟清晰可讀
```

### 測試覆蓋率目標

| 層級 | 目標 | 重要性 |
|------|------|--------|
| 核心邏輯 | 100% | 必須 |
| 主要功能 | 90-95% | 必須 |
| 輔助功能 | 80% | 必須 |
| 整體專案 | > 80% | 最低要求 |

### 開發順序建議
1. **優先級最高**: 匹配演算法 (核心邏輯)
2. **優先級次高**: 資料模型 (基礎設施)
3. **優先級中等**: CRUD 操作 (功能)
4. **優先級較低**: 前端介面 (用戶層)

---

## 💡 重要決策記錄

### 決策 #1: 採用 TDD 開發方法
- **日期**: 2025-10-27
- **決策**: 使用 Test-Driven Development (Red-Green-Refactor)
- **理由**: 
  - 確保程式碼品質
  - 減少 bug 和技術債
  - 便於日後重構和維護
  - 提高信心度
- **影響**: 
  - 所有功能開發前必須先寫測試
  - 測試覆蓋率目標: 80% 最低、90%+ 理想、核心邏輯 100%
  - 測試通過是提交代碼的必要條件
- **測試層級**: 單元測試 → 整合測試 → 端對端測試

### 決策 #2: 資料庫可擴充設計
- **日期**: 2025-10-27
- **決策**: 食譜資料庫必須支援隨時擴充（至少 1000+ 食譜）
- **理由**: 
  - 使用者需求中明確提出
  - 食譜資料庫是系統的核心資產
  - 未來需要持續新增食譜
- **影響**: 
  - 需要設計良好的資料結構（見資料結構章節）
  - 需要完整的 CRUD 操作介面
  - 食材需與食譜解耦，支援關聯查詢
  - 支援食材別名（如番茄/西紅柿）

### 決策 #3: 首先優化 PRD.md 而不是立即技術選型
- **日期**: 2025-10-27
- **決策**: 在規劃階段先完成詳細的 PRD，優化需求文件
- **理由**:
  - PRD 是所有開發的基礎
  - 明確的需求能避免後期返工
  - 有助於使用者確認核心功能
  - 便於選型時做出更好決策
- **影響**:
  - 當前階段: 完成 PRD 優化和審查
  - 下一階段: 基於確認的需求進行技術選型
  - 再下一階段: 開始架構設計和開發

### 決策 #4: 核心使用流程 < 2 分鐘完成
- **日期**: 2025-10-27
- **決策**: 從進入系統到找到食譜應在 2 分鐘內完成
- **理由**:
  - 解決使用者的核心痛點（節省思考時間）
  - 提高用戶體驗
- **影響**:
  - 介面設計需優化易用性
  - API 回應時間需 < 1 秒
  - 搜尋演算法需高效

---

## 🎯 MVP 範圍定義

### Phase 1 - 核心功能（當前目標）
必須包含的功能：
1. 食材選擇介面
2. 基礎食譜資料庫（至少 20 筆）
3. 食譜匹配演算法（完全匹配 + 部分匹配）
4. 食譜詳細資訊顯示
5. 完整測試覆蓋

不包含的功能：
- 使用者帳號系統
- 收藏功能
- 個人化推薦
- 進階搜尋篩選

---

## 📝 開發規範與最佳實踐

### 命名規範（待確定技術後更新）
- **變數**: camelCase
  - ✅ `selectedIngredients`, `matchRate`, `cookingTime`
  - ❌ `selected_ingredients`, `MatchRate`

- **常數**: UPPER_SNAKE_CASE
  - ✅ `MAX_RECIPE_COUNT`, `DEFAULT_SERVING_SIZE`
  - ❌ `maxRecipeCount`, `max_recipe_count`

- **類別**: PascalCase
  - ✅ `RecipeService`, `IngredientModel`, `MatchingEngine`
  - ❌ `recipe_service`, `recipeService`

- **檔案**: kebab-case (前端) 或 snake_case (後端)
  - ✅ `recipe-matcher.js`, `ingredient_model.py`
  - ❌ `recipeMatcher.js`, `IngredientModel.js`

- **函數/方法**: camelCase，以動詞開頭
  - ✅ `getRecipe()`, `matchRecipes()`, `addIngredient()`
  - ❌ `recipe()`, `recipes_match()`, `ingredient_add()`

### Git 提交規範
格式: `<type>(<scope>): <subject>`

**type 類型**:
- `feat`: 新增功能 (feature)
- `fix`: 修復 bug
- `test`: 新增或修改測試
- `refactor`: 重構程式碼（不改變功能）
- `docs`: 文件更新
- `style`: 程式碼格式調整（不影響運行）
- `chore`: 構建流程、依賴管理等

**例子**:
```
feat(matcher): 實作基礎匹配演算法
test(recipe): 新增食譜 CRUD 測試
docs(README): 補充安裝說明
fix(matcher): 修復部分匹配計算錯誤
```

### 程式碼審查標準
**必須滿足**:
- [ ] 所有新測試必須通過
- [ ] 所有舊測試仍然通過
- [ ] 測試覆蓋率不能降低
- [ ] 程式碼遵循命名規範
- [ ] 沒有註解掉的程式碼

**應該滿足**:
- [ ] 函數/方法有文件說明（docstring/comments）
- [ ] 複雜邏輯有適當的註解
- [ ] 變數名清晰易懂
- [ ] 單一函數不超過 20 行（除特殊情況）

### 文件結構範例
```
project-root/
├── README.md                 # 專案說明
├── PRD.md                    # 產品需求文件
├── AGENTS.md                 # AI 協作文件
├── ARCHITECTURE.md           # 技術架構
├── DATABASE.md               # 資料庫設計
├── API.md                    # API 文件
├── src/
│   ├── models/               # 資料模型
│   │   ├── ingredient.py
│   │   ├── recipe.py
│   │   └── match_result.py
│   ├── services/             # 業務邏輯
│   │   ├── matching_engine.py
│   │   ├── recipe_service.py
│   │   └── ingredient_service.py
│   └── ui/                   # 使用者介面
│       ├── ingredient_selector.html
│       ├── recipe_list.html
│       └── recipe_detail.html
├── tests/
│   ├── unit/
│   │   ├── test_matching_engine.py
│   │   ├── test_recipe_service.py
│   │   └── test_ingredient_service.py
│   ├── integration/
│   │   └── test_recipe_flow.py
│   └── e2e/
│       └── test_user_workflow.py
├── data/
│   ├── recipes.json          # 食譜資料
│   └── ingredients.json      # 食材資料
└── .gitignore
```

---

## 🐛 已知問題與風險

### 風險 #1: 食材名稱標準化
- **描述**: 同一食材可能有多種名稱（番茄/西紅柿）
- **影響**: 匹配準確度
- **緩解方案**: 在食材資料中加入 aliases 欄位
- **狀態**: 已在資料結構設計中考慮

### 風險 #2: 食譜資料品質
- **描述**: 需要建立和維護高品質的食譜資料
- **影響**: 使用者體驗
- **緩解方案**: 建立食譜資料驗證機制
- **狀態**: 待開發階段處理

### 風險 #3: 匹配演算法複雜度
- **描述**: 食譜匹配可能有多種情境需處理
- **影響**: 開發時間
- **緩解方案**: 從簡單完全匹配開始，逐步擴充
- **狀態**: 已在 PRD 中定義優先級

---

## 🔗 相關文件

- **PRD.md**: 產品需求文件（完整功能規格）
- **README.md**: 專案說明（待建立）
- **ARCHITECTURE.md**: 技術架構文件（待建立）
- **API.md**: API 文件（待建立）
- **DATABASE.md**: 資料庫設計文件（待建立）

---

## 📞 給下一位 AI Agent 的指引

### 專案概況一覽
- **專案名稱**: 家庭食材配對食譜系統 (Recipe Matcher)
- **核心問題**: 幫助自己做飯的人快速決定今天要煮什麼（< 2 分鐘內）
- **主要功能**: 選擇食材 → 匹配食譜 → 查看烹飪步驟
- **開發方法**: 嚴格 TDD (Red-Green-Refactor)
- **當前階段**: Plan Mode（規劃階段）- 完成 PRD 和文件準備

### 如何接手此專案

#### 📚 第一步：深入理解
1. **仔細閱讀** AGENTS.md （本文件）了解：
   - 專案的完整狀態
   - 重要決策和理由
   - 待辦事項優先級
   - 資料結構設計

2. **詳細閱讀** PRD.md 了解：
   - 用戶痛點和核心需求
   - 詳細的功能規格
   - 成功指標和品質要求
   - 食材分類和匹配演算法

3. **快速掃過** 其他文件（如有新增）

#### 🎯 第二步：確認當前優先任務
根據專案階段判斷下一步：

**如果在規劃階段（當前）**:
- [ ] 與使用者確認 PRD.md 中的所有需求
- [ ] 收集使用者對技術棧的偏好
- [ ] 協助使用者確定技術選型（前端、後端、資料庫）
- [ ] 制定詳細開發時程

**如果技術已選定**:
- [ ] 建立詳細的技術架構文件 (ARCHITECTURE.md)
- [ ] 設計資料庫結構詳細規格 (DATABASE.md)
- [ ] 設計 API 介面 (API.md)

**如果開發開始**:
- [ ] 按照待辦事項優先級開始 TDD
- [ ] 每完成一個任務立即更新 AGENTS.md
- [ ] 嚴格遵循「先寫測試」的原則

#### 🛠️ 第三步：開發原則（必須遵守）
1. **嚴格 TDD**: 任何功能都必須先寫測試，然後實作
   - 先寫失敗的測試 (Red)
   - 寫最少程式碼使測試通過 (Green)
   - 重構改進 (Refactor)

2. **小步快跑**: 每次只完成一個小功能
   - 一個測試 → 一個實作 → 一個提交
   - 避免大塊改動

3. **持續更新文件**: 完成任務後立即更新 AGENTS.md
   - 更新「已完成項目」
   - 更新「進度追蹤」
   - 記錄任何新決策

4. **測試覆蓋率**: 保持 80%+ 的覆蓋率
   - 核心邏輯必須 100%
   - 匹配演算法必須 100%

#### 💬 第四步：溝通建議
1. **主動詢問不明確的需求**:
   - 「食譜匹配演算法中，常見食材（如鹽）應該如何處理？」
   - 「資料庫是用 SQL 還是 NoSQL？」

2. **提供選項時說明優缺點**:
   - ✅ 「我推薦用 Python + Flask，因為...優點；缺點是...」
   - ❌ ❌ 「應該用 Python」

3. **定期確認方向**:
   - 每完成一個 Phase 都確認下一步
   - 有任何問題或想法立即溝通

#### 📊 第五步：更新進度
完成每個待辦事項後：
1. 在 AGENTS.md 中將任務標記為完成
2. 記錄完成時間和任何重要決策
3. 更新「進度追蹤」的百分比
4. 提交 Git commit

**例子**:
```
feat(tdd): 完成匹配度計算函數的 TDD 開發
- 撰寫 10 個單元測試
- 實作核心匹配邏輯
- 測試覆蓋率達 100%
- 本任務用時 2 小時
```

### 快速命令參考

**查看待辦事項的優先級**:
```markdown
Priority 0 (立即做):
1. 技術選型決策
2. 資料庫架構設計
3. API 設計

Priority 1 (規劃階段後):
4. 專案初始化
5. 測試框架設定

Priority 2 (開發階段):
6-10. 各功能 TDD 開發
```

**常見問題快速查詢**:
- 「匹配度怎麼計算？」→ 見 PRD.md § 2.2
- 「資料結構是什麼？」→ 見 AGENTS.md § 📐
- 「怎樣進行 TDD？」→ 見 AGENTS.md § 🧪
- 「代碼應該怎麼命名？」→ 見 AGENTS.md § 📝

### 若遇到困難

1. **不清楚需求**:
   - 重新閱讀 PRD.md
   - 查看「核心功能需求」章節
   - 與使用者確認細節

2. **不知道該做什麼**:
   - 查看 AGENTS.md 中的「待辦事項」
   - 按優先級順序進行
   - 優先級 0 是立即要做的

3. **技術問題**:
   - 查看本文件的「開發規範」
   - 查看相關的技術文件
   - 必要時新增新的技術決策記錄

4. **發現 PRD 有問題**:
   - 與使用者討論並確認修改
   - 在 PRD.md 中更新
   - 在 AGENTS.md 中記錄決策變更

---

## 📈 進度追蹤

### 專案完成度
- [ ] 規劃階段 (25% - 進行中)
  - [x] PRD 初稿
  - [x] 進度追蹤文件
  - [ ] 技術選型
  - [ ] 架構設計
  
- [ ] 開發階段 (0%)
  - [ ] 環境設定
  - [ ] 資料層開發
  - [ ] 業務邏輯開發
  - [ ] 前端介面開發
  
- [ ] 測試階段 (0%)
  - [ ] 單元測試
  - [ ] 整合測試
  - [ ] 使用者測試
  
- [ ] 部署階段 (0%)
  - [ ] 部署設定
  - [ ] 正式上線

### 預估總進度: 10%
*（基於 PRD 和 AGENTS.md 完成）*

---

## 🎓 學習資源（建議）

### TDD 相關
- Test-Driven Development 基礎教學
- 各語言的測試框架文件

### 食譜資料參考
- 各大食譜網站
- 開放食譜資料集（如有）

### 匹配演算法
- 集合匹配演算法
- 推薦系統基礎

---

## 📅 時間軸

| 日期 | 事件 | 狀態 |
|------|------|------|
| 2025-10-27 | 專案啟動、PRD 初稿建立 | ✅ 完成 |
| 2025-10-27 | PRD 優化完善 (v1.1)、AGENTS.md 詳化 | ✅ 完成 |
| TBD | 使用者確認 PRD 無修改意見 | ⏳ 待定 |
| TBD | 技術選型決策完成 | ⏳ 待定 |
| TBD | 架構設計完成 (ARCHITECTURE.md) | ⏳ 待定 |
| TBD | 資料庫設計完成 (DATABASE.md) | ⏳ 待定 |
| TBD | API 設計完成 (API.md) | ⏳ 待定 |
| TBD | MVP Phase 1 TDD 開發開始 | ⏳ 待定 |
| TBD | 匹配演算法完成 (核心邏輯) | ⏳ 待定 |
| TBD | 資料模型 CRUD 完成 | ⏳ 待定 |
| TBD | 前端介面開發完成 | ⏳ 待定 |
| TBD | MVP Phase 1 上線 | ⏳ 待定 |

---

**最後更新時間**: 2025-10-27T15:30:00Z  
**更新者**: GitHub Copilot  
**更新內容**: PRD.md 完善優化、AGENTS.md 詳細化  
**下次檢查點**: 等待使用者確認 PRD 無修改需求，然後進行技術選型

