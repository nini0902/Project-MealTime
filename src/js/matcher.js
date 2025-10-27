// =============================================
// 食材配對頁面 - 核心邏輯
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

// 食譜數據
const RECIPES_DATA = [
  {
    id: 'recipe_001',
    name: '番茄炒雞蛋',
    category: '中式/快炒',
    difficulty: '簡單',
    cookingTime: 15,
    servings: 2,
    ingredients: ['番茄', '雞蛋', '食用油', '鹽', '蒜'],
    steps: [
      '將雞蛋打入碗中，加鹽打散',
      '番茄洗淨切成塊狀',
      '熱鍋下油，待油熱後倒入雞蛋液，炒至半熟時盛出',
      '鍋中再下油，放入蒜末爆香，加入番茄塊炒出湯汁',
      '將炒好的雞蛋倒回，混合炒均勻，調味即可'
    ],
    tips: '蛋要炒至半熟再加番茄，保持蛋的鬆軟口感，番茄要炒出湯汁才能更好地調味'
  },
  {
    id: 'recipe_002',
    name: '番茄雞湯',
    category: '湯品',
    difficulty: '簡單',
    cookingTime: 30,
    servings: 3,
    ingredients: ['番茄', '雞肉', '洋蔥', '鹽', '薑'],
    steps: [
      '雞肉切塊，用開水焯水後瀝乾',
      '番茄和洋蔥切塊',
      '薑切片備用',
      '熱鍋下油，放入薑片爆香',
      '加入雞肉塊翻炒幾分鐘',
      '加入番茄和洋蔥，倒入清水',
      '烈火燒開後轉小火，煮 20 分鐘',
      '調味即可'
    ],
    tips: '番茄要選新鮮的，湯會更美味'
  },
  {
    id: 'recipe_003',
    name: '蔥爆雞肉',
    category: '中式/快炒',
    difficulty: '中等',
    cookingTime: 20,
    servings: 2,
    ingredients: ['雞肉', '洋蔥', '蒜', '醬油', '食用油', '糖'],
    steps: [
      '雞肉切塊',
      '洋蔥切段，蒜切片',
      '熱鍋下油，放入蒜片爆香',
      '加入雞肉塊，炒至表面變色',
      '加入洋蔥段繼續炒',
      '淋上醬油和少許糖，翻炒均勻',
      '炒至洋蔥軟爛、雞肉熟透即可'
    ],
    tips: '火要夠猛，這樣蔥的香味才能充分釋放'
  },
  {
    id: 'recipe_004',
    name: '番茄蛋湯',
    category: '湯品',
    difficulty: '簡單',
    cookingTime: 10,
    servings: 2,
    ingredients: ['番茄', '雞蛋', '食用油', '鹽'],
    steps: [
      '番茄切塊',
      '雞蛋打散',
      '鍋中加水燒開',
      '下番茄塊煮幾分鐘',
      '慢慢倒入蛋液，邊倒邊攪拌',
      '煮至蛋花散開即可，加鹽調味'
    ],
    tips: '倒蛋液時要邊倒邊攪拌，這樣蛋花才會好看'
  },
  {
    id: 'recipe_005',
    name: '白菜炒豬肉',
    category: '中式/快炒',
    difficulty: '簡單',
    cookingTime: 15,
    servings: 2,
    ingredients: ['高麗菜', '豬肉', '蒜', '醬油', '食用油'],
    steps: [
      '豬肉切片',
      '高麗菜切絲',
      '蒜切片',
      '熱鍋下油，放入蒜片爆香',
      '加入豬肉片炒至變色',
      '加入高麗菜絲，炒至軟化',
      '淋上醬油翻炒均勻即可'
    ],
    tips: '高麗菜要火快手快，保持脆爽的口感'
  },
  {
    id: 'recipe_006',
    name: '蝦仁炒飯',
    category: '中式/炒飯',
    difficulty: '中等',
    cookingTime: 15,
    servings: 2,
    ingredients: ['米', '蝦', '雞蛋', '豌豆', '玉米', '蒜', '醬油', '食用油'],
    steps: [
      '米飯提前煮好並冷卻',
      '蝦去殼去腸，雞蛋打散',
      '蒜切片，豌豆和玉米準備好',
      '鍋熱下油，放入蛋液炒至半熟盛出',
      '再下油爆香蒜片',
      '加入蝦炒至變紅',
      '加入米飯，翻炒使米粒散開',
      '加入豌豆、玉米和蛋，淋上醬油翻炒',
      '炒勻即可'
    ],
    tips: '米飯一定要冷卻，這樣炒出來的飯才夠鬆散'
  }
];

// =============================================
// 工具函數
// =============================================

/**
 * 計算匹配度
 */
function calculateMatchRate(userIngredients, recipeIngredients) {
  if (recipeIngredients.length === 0) return 0;
  
  const matched = userIngredients.filter(ing => 
    recipeIngredients.includes(ing)
  ).length;
  
  return Math.round((matched / recipeIngredients.length) * 100);
}

/**
 * 獲取缺少的食材
 */
function getMissingIngredients(userIngredients, recipeIngredients) {
  return recipeIngredients.filter(ing => !userIngredients.includes(ing));
}

/**
 * 匹配食譜
 */
function matchRecipes(userIngredients) {
  const results = RECIPES_DATA.map(recipe => ({
    ...recipe,
    matchRate: calculateMatchRate(userIngredients, recipe.ingredients),
    missingIngredients: getMissingIngredients(userIngredients, recipe.ingredients),
    hasAllIngredients: getMissingIngredients(userIngredients, recipe.ingredients).length === 0
  }))
  .filter(recipe => recipe.matchRate >= 50)
  .sort((a, b) => {
    // 先按完全匹配排序
    if (a.hasAllIngredients !== b.hasAllIngredients) {
      return a.hasAllIngredients ? -1 : 1;
    }
    // 再按匹配度排序
    return b.matchRate - a.matchRate;
  });
  
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
  const perfectMatchSection = document.getElementById('perfectMatchSection');
  const partialMatchSection = document.getElementById('partialMatchSection');
  const noResultsState = document.getElementById('noResultsState');
  
  emptyState.style.display = 'none';
  resultsContainer.style.display = 'block';
  
  if (results.length === 0) {
    noResultsState.style.display = 'block';
    perfectMatchSection.style.display = 'none';
    partialMatchSection.style.display = 'none';
    return;
  }
  
  noResultsState.style.display = 'none';
  
  // 分類結果
  const perfectMatch = results.filter(r => r.hasAllIngredients);
  const partialMatch = results.filter(r => !r.hasAllIngredients);
  
  // 更新結果摘要
  document.getElementById('resultsSummary').textContent = `已為您找到 ${results.length} 個食譜`;
  
  // 顯示完全匹配
  if (perfectMatch.length > 0) {
    perfectMatchSection.style.display = 'block';
    document.getElementById('perfectMatchCount').textContent = `(${perfectMatch.length})`;
    document.getElementById('perfectMatchList').innerHTML = createRecipeCards(perfectMatch);
  } else {
    perfectMatchSection.style.display = 'none';
  }
  
  // 顯示部分匹配
  if (partialMatch.length > 0) {
    partialMatchSection.style.display = 'block';
    document.getElementById('partialMatchCount').textContent = `(${partialMatch.length})`;
    document.getElementById('partialMatchList').innerHTML = createRecipeCards(partialMatch);
  } else {
    partialMatchSection.style.display = 'none';
  }
}

/**
 * 創建食譜卡片
 */
function createRecipeCards(recipes) {
  return recipes.map(recipe => `
    <div class="recipe-card" onclick="showRecipeDetail('${recipe.id}')">
      <div class="recipe-card-header">
        <div class="recipe-card-title">${recipe.name}</div>
        <div class="recipe-card-meta">
          <div class="recipe-card-meta-item">⏱️ ${recipe.cookingTime} 分鐘</div>
          <div class="recipe-card-meta-item">👥 ${recipe.servings} 人份</div>
          <div class="recipe-card-meta-item">${getDifficultyBadge(recipe.difficulty)}</div>
        </div>
      </div>
      <div class="recipe-card-body">
        <p>${recipe.category}</p>
      </div>
      <div class="recipe-card-footer">
        <div class="recipe-match-rate">
          <div class="recipe-match-percent">${recipe.matchRate}%</div>
          <div class="recipe-match-label">匹配度</div>
        </div>
        ${recipe.missingIngredients.length > 0 ? 
          `<div class="recipe-missing">缺少：${recipe.missingIngredients.join('、')}</div>` : 
          '<span style="color: var(--color-green-primary); font-weight: 600;">✓ 可完全製作</span>'}
      </div>
    </div>
  `).join('');
}

/**
 * 獲取難度徽章
 */
function getDifficultyBadge(difficulty) {
  const badges = {
    '簡單': '<span class="badge badge-green">簡單</span>',
    '中等': '<span class="badge badge-warning">中等</span>',
    '困難': '<span class="badge badge-error">困難</span>'
  };
  return badges[difficulty] || '';
}

/**
 * 顯示食譜詳細資訊
 */
function showRecipeDetail(recipeId) {
  const recipe = RECIPES_DATA.find(r => r.id === recipeId);
  if (!recipe) return;
  
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <h2 class="recipe-detail-title">${recipe.name}</h2>
    
    <div class="recipe-detail-meta">
      <div class="recipe-detail-meta-item">
        <span class="recipe-detail-meta-label">難度</span>
        <span class="recipe-detail-meta-value">${recipe.difficulty}</span>
      </div>
      <div class="recipe-detail-meta-item">
        <span class="recipe-detail-meta-label">烹飪時間</span>
        <span class="recipe-detail-meta-value">${recipe.cookingTime}分鐘</span>
      </div>
      <div class="recipe-detail-meta-item">
        <span class="recipe-detail-meta-label">份量</span>
        <span class="recipe-detail-meta-value">${recipe.servings}人份</span>
      </div>
      <div class="recipe-detail-meta-item">
        <span class="recipe-detail-meta-label">分類</span>
        <span class="recipe-detail-meta-value">${recipe.category}</span>
      </div>
    </div>
    
    <div class="recipe-detail-section">
      <h3>🥬 食材</h3>
      <ul class="ingredients-list">
        ${recipe.ingredients.map(ing => `
          <li>
            <span class="ingredient-name">${ing}</span>
            <span class="ingredient-amount">適量</span>
          </li>
        `).join('')}
      </ul>
    </div>
    
    <div class="recipe-detail-section">
      <h3>👨‍🍳 烹飪步驟</h3>
      <ol class="steps-list">
        ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>
    
    ${recipe.tips ? `
      <div class="recipe-tips">
        <strong>💡 小貼士</strong>
        ${recipe.tips}
      </div>
    ` : ''}
  `;
  
  const modal = document.getElementById('recipeModal');
  modal.classList.add('active');
}

/**
 * 關閉模態框
 */
function closeModal() {
  document.getElementById('recipeModal').classList.remove('active');
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
  
  // 模態框關閉
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('recipeModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('recipeModal')) {
      closeModal();
    }
  });
});
