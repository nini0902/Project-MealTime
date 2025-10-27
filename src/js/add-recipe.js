// 新增食譜頁面邏輯

let ingredientCount = 1;
let stepCount = 1;

const allIngredients = [
  // 蔬菜
  '番茄', '洋蔥', '胡蘿蔔', '青花菜', '高麗菜',
  '馬鈴薯', '地瓜', '南瓜', '茄子', '青椒',
  '玉米', '豌豆', '豆芽', '白蘿蔔', '冬瓜',
  // 肉類
  '雞肉', '豬肉', '牛肉', '羊肉', '火腿',
  // 海鮮
  '蝦', '魚', '貝類', '鮮蚵', '花枝', '魷魚',
  // 蛋類
  '雞蛋',
  // 乳製品
  '牛奶', '起司', '優格', '奶油',
  // 調味料
  '醬油', '鹽', '糖', '食用油', '辣椒', '蒜', '薑', '黑胡椒',
  // 乾貨
  '米', '麵條', '豆類', '香菇', '木耳', '蝦米'
];

/**
 * 添加食材行
 */
function addIngredientRow() {
  const container = document.getElementById('ingredientsContainer');
  const rowId = `ingredient-${ingredientCount}`;
  
  const row = document.createElement('div');
  row.className = 'ingredient-row';
  row.id = rowId;
  row.innerHTML = `
    <div>
      <label for="${rowId}-select">食材</label>
      <select id="${rowId}-select" class="ingredient-select" required>
        <option value="">請選擇食材</option>
        ${allIngredients.map(ing => `<option value="${ing}">${ing}</option>`).join('')}
      </select>
    </div>
    <div>
      <label for="${rowId}-amount">用量</label>
      <input type="number" id="${rowId}-amount" step="0.1" min="0" placeholder="如：2" required>
    </div>
    <div>
      <label for="${rowId}-unit">單位</label>
      <select id="${rowId}-unit" required>
        <option value="個">個</option>
        <option value="克">克</option>
        <option value="湯匙">湯匙</option>
        <option value="茶匙">茶匙</option>
        <option value="杯">杯</option>
        <option value="條">條</option>
        <option value="片">片</option>
      </select>
    </div>
    <button type="button" class="btn btn-sm btn-remove" onclick="removeIngredientRow('${rowId}')">刪除</button>
  `;
  
  container.appendChild(row);
  ingredientCount++;
}

/**
 * 移除食材行
 */
function removeIngredientRow(rowId) {
  const row = document.getElementById(rowId);
  if (row) {
    row.remove();
  }
}

/**
 * 添加步驟行
 */
function addStepRow() {
  const container = document.getElementById('stepsContainer');
  const rowId = `step-${stepCount}`;
  
  const row = document.createElement('div');
  row.className = 'step-row';
  row.id = rowId;
  row.innerHTML = `
    <div>
      <label for="${rowId}-text">步驟 ${stepCount}</label>
      <textarea id="${rowId}-text" placeholder="輸入烹飪步驟..." required></textarea>
    </div>
    <button type="button" class="btn btn-sm btn-remove" onclick="removeStepRow('${rowId}')">刪除</button>
  `;
  
  container.appendChild(row);
  stepCount++;
}

/**
 * 移除步驟行
 */
function removeStepRow(rowId) {
  const row = document.getElementById(rowId);
  if (row) {
    row.remove();
  }
}

/**
 * 驗證表單
 */
function validateForm(formData) {
  const errors = {};
  
  // 食譜名稱
  if (!formData.recipeName || formData.recipeName.length < 3 || formData.recipeName.length > 100) {
    errors.recipeName = '食譜名稱需 3-100 字元';
  }
  
  // 分類
  if (!formData.recipeCategory) {
    errors.recipeCategory = '請選擇分類';
  }
  
  // 難度
  if (!formData.recipeDifficulty) {
    errors.recipeDifficulty = '請選擇難度等級';
  }
  
  // 烹飪時間
  if (!formData.recipeTime || formData.recipeTime < 1 || formData.recipeTime > 999) {
    errors.recipeTime = '烹飪時間需 1-999 分鐘';
  }
  
  // 份量
  if (!formData.recipeServings || formData.recipeServings < 1 || formData.recipeServings > 20) {
    errors.recipeServings = '份量需 1-20 人份';
  }
  
  // 食材清單
  if (formData.ingredients.length === 0) {
    errors.ingredients = '至少需要 1 個食材';
  }
  
  // 烹飪步驟
  if (formData.steps.length === 0) {
    errors.steps = '至少需要 1 個烹飪步驟';
  }
  
  return errors;
}

/**
 * 獲取表單數據
 */
function getFormData() {
  const form = document.getElementById('recipeForm');
  
  // 食材數據
  const ingredients = [];
  document.querySelectorAll('.ingredient-row').forEach(row => {
    const select = row.querySelector('select');
    const amount = row.querySelector('input[type="number"]');
    const unit = row.querySelectorAll('select')[1];
    
    if (select.value && amount.value) {
      ingredients.push({
        name: select.value,
        amount: parseFloat(amount.value),
        unit: unit.value
      });
    }
  });
  
  // 步驟數據
  const steps = [];
  document.querySelectorAll('.step-row').forEach(row => {
    const textarea = row.querySelector('textarea');
    if (textarea.value) {
      steps.push(textarea.value);
    }
  });
  
  return {
    recipeName: document.getElementById('recipeName').value,
    recipeCategory: document.getElementById('recipeCategory').value,
    recipeDifficulty: document.querySelector('input[name="recipeDifficulty"]:checked')?.value || '',
    recipeTime: parseInt(document.getElementById('recipeTime').value) || 0,
    recipeServings: parseInt(document.getElementById('recipeServings').value) || 0,
    recipeTips: document.getElementById('recipeTips').value,
    ingredients: ingredients,
    steps: steps
  };
}

/**
 * 顯示錯誤提示
 */
function showErrors(errors) {
  Object.entries(errors).forEach(([field, message]) => {
    const element = document.getElementById(field);
    if (element) {
      element.classList.add('form-error');
    }
  });
  
  const errorMessages = Object.values(errors).join('\n');
  alert('表單驗證失敗：\n' + errorMessages);
}

/**
 * 清除錯誤提示
 */
function clearErrors() {
  document.querySelectorAll('.form-error').forEach(el => {
    el.classList.remove('form-error');
  });
}

/**
 * 提交表單
 */
function handleSubmit(e) {
  e.preventDefault();
  
  clearErrors();
  const formData = getFormData();
  const errors = validateForm(formData);
  
  if (Object.keys(errors).length > 0) {
    showErrors(errors);
    return;
  }
  
  // 保存到本地存儲（暫時）
  const recipes = JSON.parse(localStorage.getItem('userRecipes') || '[]');
  recipes.push({
    id: `recipe_user_${Date.now()}`,
    source: 'user',
    ...formData
  });
  localStorage.setItem('userRecipes', JSON.stringify(recipes));
  
  alert('食譜新增成功！');
  document.getElementById('recipeForm').reset();
  
  // 重置計數器
  ingredientCount = 1;
  stepCount = 1;
  initializeForm();
  
  // 重定向到食譜列表
  setTimeout(() => {
    window.location.href = 'recipes.html';
  }, 1000);
}

/**
 * 初始化表單
 */
function initializeForm() {
  // 初始化時添加一個食材和一個步驟
  const ingredientsContainer = document.getElementById('ingredientsContainer');
  const stepsContainer = document.getElementById('stepsContainer');
  
  ingredientsContainer.innerHTML = '';
  stepsContainer.innerHTML = '';
  
  ingredientCount = 1;
  stepCount = 1;
  
  addIngredientRow();
  addStepRow();
}

document.addEventListener('DOMContentLoaded', () => {
  initializeForm();
  
  // 事件監聽
  document.getElementById('addIngredientBtn').addEventListener('click', addIngredientRow);
  document.getElementById('addStepBtn').addEventListener('click', addStepRow);
  document.getElementById('recipeForm').addEventListener('submit', handleSubmit);
});
