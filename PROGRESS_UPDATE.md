# 前端功能簡化 - 進度更新

**更新日期**: 2025-10-28  
**狀態**: ✅ 功能簡化完成

---

## 📋 本次更新內容

### 1️⃣ 刪除的功能

#### ❌ 詳細食譜步驟顯示
- 移除了食譜詳細資訊模態框 (`recipeModal`)
- 移除了 `showRecipeDetail()` 函數
- 刪除了烹飪步驟、時間、份量、難度等詳細信息的顯示

#### ❌ 匹配度計算與顯示
- 移除了 `calculateMatchRate()` 函數
- 移除了匹配度百分比顯示
- 刪除了完全匹配 vs 部分匹配的分類邏輯
- 移除了 `getMissingIngredients()` 函數
- 刪除了「缺少食材」提示

### 2️⃣ 保留的核心功能

#### ✅ 食材選擇面板
- 7 大類食材分類選擇
- 食材搜尋功能
- 已選擇計數顯示
- 清空全部按鈕

#### ✅ 簡化的食譜推薦
- **邏輯**：只要用戶選擇的食材包含食譜中的**至少一種**食材，就推薦該食譜
- **不再使用**：複雜的匹配度算法
- **結果顯示**：
  - 食譜名稱
  - 分類
  - 包含的食材列表

### 3️⃣ 修改的文件

#### `src/js/matcher.js`
```javascript
// 新的匹配邏輯 - 簡化版本
function matchRecipes(userIngredients) {
  const RECIPES_DATA = getRecipesData();
  const results = RECIPES_DATA.filter(recipe => 
    hasAnyIngredient(userIngredients, recipe.ingredients)
  );
  return results;
}

// 新增：從 localStorage 讀取食譜數據
function getRecipesData() {
  const stored = localStorage.getItem('recipesData');
  if (stored) return JSON.parse(stored);
  return DEFAULT_RECIPES_DATA;
}
```

**變更摘要**：
- ❌ 刪除了匹配度計算和排序邏輯
- ❌ 刪除了詳細步驟、時間、份量、難度等信息
- ✅ 新增了 `getRecipesData()` 以支援 localStorage 食譜數據
- ✅ 簡化了 `displayResults()` 和 `createRecipeCards()`

#### `src/pages/matcher.html`
**變更摘要**：
- ❌ 刪除了「完全匹配」和「部分匹配」的分類區域
- ❌ 刪除了食譜詳細模態框 HTML
- ✅ 保留單一結果列表區域 (`#resultsList`)

---

## 📊 食譜數據結構（新版本）

### 預設食譜格式
```javascript
{
  id: 'recipe_001',
  name: '番茄炒雞蛋',
  category: '中式/快炒',
  ingredients: ['番茄', '雞蛋', '食用油', '鹽', '蒜']
  // 移除：difficulty, cookingTime, servings, steps, tips
}
```

### localStorage 存儲格式
```javascript
localStorage.setItem('recipesData', JSON.stringify([
  {
    id: 'recipe_001',
    name: '番茄炒雞蛋',
    category: '中式/快炒',
    ingredients: ['番茄', '雞蛋', '食用油', '鹽', '蒜']
  },
  // ... 更多食譜
]));
```

---

## 🎯 下一步計劃

### 立即進行
1. **[決定]** 食譜資料庫儲存方案
   - 選項 A: localStorage（純前端，無需後端）
   - 選項 B: JSON 文件（後端支援）
   - 選項 C: 真實數據庫（PostgreSQL/MongoDB 等）

2. **[實現]** 根據選定方案改進「新增食譜」功能

3. **[測試]** 驗證簡化後的食材配對功能是否正常

### 短期目標
- [ ] 完成食譜資料庫設計
- [ ] 實現食譜的新增、編輯、刪除功能
- [ ] 完善新增食譜頁面表單驗證

---

## 📝 當前食譜庫狀態

**預設食譜數量**: 6 個
- 番茄炒雞蛋 (中式/快炒)
- 番茄雞湯 (湯品)
- 蔥爆雞肉 (中式/快炒)
- 番茄蛋湯 (湯品)
- 白菜炒豬肉 (中式/快炒)
- 蝦仁炒飯 (中式/炒飯)

**用戶新增食譜**: 存儲在 localStorage（`recipesData`）

---

## 💡 使用示例

### 用戶流程
1. 進入「食材配對」頁面
2. 選擇家裡有的食材（如：番茄、雞蛋）
3. 點擊「搜尋食譜」
4. 系統推薦包含這些食材的所有食譜
   - 「番茄炒雞蛋」✅ 包含番茄和雞蛋
   - 「番茄雞湯」✅ 包含番茄
   - 「番茄蛋湯」✅ 包含番茄和雞蛋
   - 等等...

### 食譜推薦邏輯
```
用戶選擇: ['番茄', '雞蛋']

推薦食譜:
✓ 番茄炒雞蛋 (包含: 番茄、雞蛋) ← 完全匹配
✓ 番茄雞湯 (包含: 番茄) ← 部分匹配
✓ 番茄蛋湯 (包含: 番茄、雞蛋) ← 完全匹配
✓ 蝦仁炒飯 (不包含) ← 不推薦
```

---

## ⚠️ 已知問題 / 待辦事項

- [ ] 確認新增食譜頁面是否需要簡化
- [ ] 決定是否保留「食譜列表」頁面
- [ ] 設計食譜資料庫的持久化方案

