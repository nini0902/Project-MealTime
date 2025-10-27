// 食譜列表頁面邏輯

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
    tips: '蛋要炒至半熟再加番茄，保持蛋的鬆軟口感'
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
    tips: '番茄要選新鮮的'
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
    tips: '火要夠猛'
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
    tips: '倒蛋液時要邊倒邊攪拌'
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
    tips: '高麗菜要火快手快'
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
    tips: '米飯一定要冷卻'
  }
];

function getDifficultyBadge(difficulty) {
  const badges = {
    '簡單': '<span class="badge badge-green">簡單</span>',
    '中等': '<span class="badge badge-warning">中等</span>',
    '困難': '<span class="badge badge-error">困難</span>'
  };
  return badges[difficulty] || '';
}

function renderRecipes(recipes) {
  const grid = document.getElementById('recipesGrid');
  grid.innerHTML = recipes.map(recipe => `
    <div class="recipe-card-small">
      <div class="recipe-card-small-header">
        <div class="recipe-card-small-title">${recipe.name}</div>
        <div class="recipe-card-small-category">${recipe.category}</div>
      </div>
      <div class="recipe-card-small-body">
        <p style="margin-bottom: var(--spacing-sm);">食材：${recipe.ingredients.slice(0, 3).join('、')}${recipe.ingredients.length > 3 ? '...' : ''}</p>
      </div>
      <div class="recipe-card-small-footer">
        <span>⏱️ ${recipe.cookingTime}分</span>
        <span>${getDifficultyBadge(recipe.difficulty)}</span>
        <span>👥 ${recipe.servings}人</span>
      </div>
    </div>
  `).join('');
}

function filterRecipes() {
  const searchTerm = document.getElementById('recipeSearch').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  const difficulty = document.getElementById('difficultyFilter').value;
  
  const filtered = RECIPES_DATA.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm) || 
                          recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm));
    const matchesCategory = !category || recipe.category === category;
    const matchesDifficulty = !difficulty || recipe.difficulty === difficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
  
  renderRecipes(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  // 初始化
  renderRecipes(RECIPES_DATA);
  
  // 搜尋和篩選事件
  document.getElementById('recipeSearch').addEventListener('input', filterRecipes);
  document.getElementById('categoryFilter').addEventListener('change', filterRecipes);
  document.getElementById('difficultyFilter').addEventListener('change', filterRecipes);
});
