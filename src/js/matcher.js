// =============================================
// 食材配對頁面 - 核心邏輯
// 功能：選擇食材 → 推薦含有這些食材的食譜
// =============================================

// 食材數據
const INGREDIENTS_DATA = {
  '蔬菜': [
    '番茄', '洋蔥', '胡蘿蔔', '青花菜', '高麗菜',
    '馬鈴薯', '地瓜', '南瓜', '茄子', '青椒',
    '玉米', '豌豆', '豆芽', '白蘿蔔', '冬瓜'
  ],
  '肉類': [
    '雞肉', '豬肉', '牛肉', '羊肉', '火腿'
  ],
  '海鮮': [
    '蝦', '魚', '貝類', '鮮蚵', '花枝', '魷魚'
  ],
  '蛋類': [
    '雞蛋'
  ],
  '乳製品': [
    '牛奶', '起司', '優格', '奶油'
  ],
  '調味料': [
    '醬油', '鹽', '糖', '食用油', '辣椒', '蒜', '薑', '黑胡椒'
  ],
  '乾貨': [
    '米', '麵條', '豆類', '香菇', '木耳', '蝦米'
  ]
};

// 從 localStorage 中獲取食譜數據，如果沒有則使用預設數據
function getRecipesData() {
  const stored = localStorage.getItem('recipesData');
  if (stored) {
    return JSON.parse(stored);
  }
  return DEFAULT_RECIPES_DATA;
}

// 預設食譜數據
const DEFAULT_RECIPES_DATA = [
  {
    id: 'recipe_001',
    name: '番茄炒雞蛋',
    category: '中式/快炒',
    ingredients: ['番茄', '雞蛋', '食用油', '鹽', '蒜']
  },
  {
    id: 'recipe_002',
    name: '番茄雞湯',
    category: '湯品',
    ingredients: ['番茄', '雞肉', '洋蔥', '鹽', '薑']
  },
  {
    id: 'recipe_003',
    name: '蔥爆雞肉',
    category: '中式/快炒',
    ingredients: ['雞肉', '洋蔥', '蒜', '醬油', '食用油', '糖']
  },
  {
    id: 'recipe_004',
    name: '番茄蛋湯',
    category: '湯品',
    ingredients: ['番茄', '雞蛋', '食用油', '鹽']
  },
  {
    id: 'recipe_005',
    name: '白菜炒豬肉',
    category: '中式/快炒',
    ingredients: ['高麗菜', '豬肉', '蒜', '醬油', '食用油']
  },
  {
    id: 'recipe_006',
    name: '蝦仁炒飯',
    category: '中式/炒飯',
    ingredients: ['米', '蝦', '雞蛋', '豌豆', '玉米', '蒜', '醬油', '食用油']
  }
];

// =============================================
// 工具函數
// =============================================

/**
 * 檢查食譜是否包含用戶選擇的至少一種食材
 */
function hasAnyIngredient(userIngredients, recipeIngredients) {
  return userIngredients.some(ing => recipeIngredients.includes(ing));
}

/**
 * 匹配食譜（只要包含至少一種選擇的食材即可推薦）
 */
function matchRecipes(userIngredients) {
  const RECIPES_DATA = getRecipesData();
  const results = RECIPES_DATA.filter(recipe => 
    hasAnyIngredient(userIngredients, recipe.ingredients)
  );
  
  return results;
}

// =============================================
// DOM 操作函數
// =============================================

/**
 * 初始化食材選擇面板
 */
function initializeIngredientPanel() {
  const container = document.getElementById('ingredientCategories');
  container.innerHTML = '';
  
  Object.entries(INGREDIENTS_DATA).forEach(([category, ingredients]) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'ingredient-category';
    
    let html = `<div class="category-title">${category}</div><div class="ingredient-list">`;
    
    ingredients.forEach(ingredient => {
      html += `
        <div class="ingredient-item">
          <input type="checkbox" id="ing-${ingredient}" value="${ingredient}">
          <label for="ing-${ingredient}">${ingredient}</label>
        </div>
      `;
    });
    
    html += '</div>';
    categoryDiv.innerHTML = html;
    container.appendChild(categoryDiv);
    
    // 添加事件監聽
    categoryDiv.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', updateSelectedCount);
    });
  });
}

/**
 * 更新已選擇食材計數
 */
function updateSelectedCount() {
  const selected = document.querySelectorAll('input[type="checkbox"]:checked');
  document.getElementById('selectedCount').textContent = selected.length;
  
  // 更新 UI 樣式
  selected.forEach(checkbox => {
    checkbox.closest('.ingredient-item').classList.add('checked');
  });
  
  document.querySelectorAll('input[type="checkbox"]:not(:checked)').forEach(checkbox => {
    checkbox.closest('.ingredient-item').classList.remove('checked');
  });
}

/**
 * 獲取已選擇的食材
 */
function getSelectedIngredients() {
  const selected = document.querySelectorAll('input[type="checkbox"]:checked');
  return Array.from(selected).map(checkbox => checkbox.value);
}

/**
 * 清空所有選擇
 */
function clearAllSelections() {
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
    checkbox.checked = false;
  });
  updateSelectedCount();
}

/**
 * 搜尋食譜
 */
function searchRecipes() {
  const selectedIngredients = getSelectedIngredients();
  
  if (selectedIngredients.length === 0) {
    alert('請先選擇至少一種食材');
    return;
  }
  
  const results = matchRecipes(selectedIngredients);
  displayResults(results);
}

/**
 * 顯示搜尋結果
 */
function displayResults(results) {
  const emptyState = document.getElementById('emptyState');
  const resultsContainer = document.getElementById('resultsContainer');
  const resultsList = document.getElementById('resultsList');
  const noResultsState = document.getElementById('noResultsState');
  
  emptyState.style.display = 'none';
  resultsContainer.style.display = 'block';
  
  if (results.length === 0) {
    noResultsState.style.display = 'block';
    resultsList.innerHTML = '';
    return;
  }
  
  noResultsState.style.display = 'none';
  document.getElementById('resultsSummary').textContent = `已為您找到 ${results.length} 個食譜`;
  resultsList.innerHTML = createRecipeCards(results);
}

/**
 * 創建食譜卡片 - 簡化版本（只顯示食譜名稱和食材）
 */
function createRecipeCards(recipes) {
  return recipes.map(recipe => `
    <div class="recipe-card">
      <div class="recipe-card-header">
        <div class="recipe-card-title">${recipe.name}</div>
      </div>
      <div class="recipe-card-body">
        <p class="recipe-category">${recipe.category}</p>
        <div class="recipe-ingredients">
          <strong>食材：</strong>${recipe.ingredients.join('、')}
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 搜尋食材
 */
function filterIngredients(searchTerm) {
  const lowerSearch = searchTerm.toLowerCase();
  const allItems = document.querySelectorAll('.ingredient-item');
  const allCategories = document.querySelectorAll('.ingredient-category');
  
  allItems.forEach(item => {
    const label = item.querySelector('label').textContent.toLowerCase();
    const matches = label.includes(lowerSearch);
    item.style.display = matches ? 'flex' : 'none';
  });
  
  // 隱藏沒有可見項目的分類
  allCategories.forEach(category => {
    const visibleItems = category.querySelectorAll('.ingredient-item[style="display: flex"]');
    category.style.display = visibleItems.length > 0 ? 'block' : 'none';
  });
}

// =============================================
// 事件監聽
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  // 初始化
  initializeIngredientPanel();
  
  // 清空按鈕
  document.getElementById('clearAllBtn').addEventListener('click', clearAllSelections);
  
  // 搜尋按鈕
  document.getElementById('searchRecipesBtn').addEventListener('click', searchRecipes);
  
  // 食材搜尋
  document.getElementById('ingredientSearch').addEventListener('input', (e) => {
    filterIngredients(e.target.value);
  });
});
