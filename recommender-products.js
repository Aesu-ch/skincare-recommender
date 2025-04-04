// Generate personalized routine
function generateRoutine(skinType, concern) {
  // Set routine intro
  const routineIntro = document.getElementById('routine-intro');
  routineIntro.innerHTML = `<p>Based on your ${getSkinTypeName(skinType)} skin and focus on ${getConcernName(skinType, concern)}, we've created this personalized routine using products perfect for your needs.</p>`;
  
  // Generate morning routine
  const morningRoutine = document.getElementById('morning-routine');
  morningRoutine.innerHTML = '';
  
  // Generate evening routine
  const eveningRoutine = document.getElementById('evening-routine');
  eveningRoutine.innerHTML = '';
  
  // Generate tips
  const skinTips = document.getElementById('skin-tips');
  
  // Now create the actual routines based on selections
  // This is where you would insert YOUR actual product recommendations
  
  if (skinType === 'dry' && concern === 'hydration') {
    // Morning routine for dry + hydration
    morningRoutine.innerHTML = `
      <div class="routine-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4>Gentle Cleansing</h4>
          <div class="product-card">
            <img src="YOUR-PRODUCT-IMAGE-URL" alt="Gentle Cleanser" class="product-image">
            <div class="product-info">
              <h4>Hydrating Gentle Cleanser</h4>
              <p>A gentle cleanser that removes impurities without stripping moisture</p>
              <a href="/products/your-cleanser-url" class="product-button">View Product</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Add more morning routine steps here -->
    `;
    
    // Evening routine for dry + hydration
    eveningRoutine.innerHTML = `
      <div class="routine-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4>Oil Cleanser</h4>
          <div class="product-card">
            <img src="YOUR-PRODUCT-IMAGE-URL" alt="Oil Cleanser" class="product-image">
            <div class="product-info">
              <h4>Nourishing Cleansing Oil</h4>
              <p>Gently removes makeup and sunscreen</p>
              <a href="/products/your-cleansing-oil-url" class="product-button">View Product</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Add more evening routine steps here -->
    `;
    
    // Tips for dry + hydration
    skinTips.innerHTML = `
      <h3>Pro Tips for Dry Skin:</h3>
      <ul>
        <li>Use lukewarm water instead of hot water</li>
        <li>Apply products to slightly damp skin</li>
        <li>Consider using a humidifier in your bedroom</li>
        <li>Reapply moisturizer during the day if needed</li>
      </ul>
    `;
  }
  
  // Add more conditions for other skin type + concern combinations
  // For example: else if (skinType === 'oily' && concern === 'acne') { ... }
  
  // Default content if no specific routine is defined
  if (morningRoutine.innerHTML === '') {
    morningRoutine.innerHTML = `
      <p>We're currently building your specific routine. Please check back soon or contact us for personalized recommendations!</p>
    `;
  }
  
  if (eveningRoutine.innerHTML === '') {
    eveningRoutine.innerHTML = `
      <p>We're currently building your specific routine. Please check back soon or contact us for personalized recommendations!</p>
    `;
  }
  
  if (skinTips.innerHTML === '') {
    skinTips.innerHTML = `
      <h3>Skincare Tips:</h3>
      <ul>
        <li>Consistency is key for seeing results</li>
        <li>Patch test new products before adding to your routine</li>
        <li>Apply products from thinnest to thickest consistency</li>
        <li>Don't forget your neck and décolletage area</li>
      </ul>
    `;
  }
}

// Helper function to get skin type name
function getSkinTypeName(skinType) {
  switch(skinType) {
    case 'dry': return 'dry';
    case 'oily': return 'oily';
    case 'combination': return 'combination';
    case 'sensitive': return 'sensitive';
    default: return '';
  }
}

// Helper function to get full skin type name
function getFullSkinTypeName(skinType) {
  switch(skinType) {
    case 'dry': return 'Dry Skin';
    case 'oily': return 'Oily Skin';
    case 'combination': return 'Combination Skin';
    case 'sensitive': return 'Sensitive Skin';
    default: return '';
  }
}

// Helper function to get skin type description
function getSkinTypeDescription(skinType) {
  switch(skinType) {
    case 'dry':
      return 'Dry skin typically feels tight after cleansing and may have flaky patches. It needs products that focus on hydration and maintaining your skin barrier.';
    case 'oily':
      return 'Oily skin produces excess sebum, often appears shiny, and may be prone to breakouts and enlarged pores. It benefits from lightweight, non-comedogenic products.';
    case 'combination':
      return 'Combination skin has an oily T-zone (forehead, nose, and chin) with normal to dry cheeks. It requires balanced products and sometimes targeted treatments for different areas.';
    case 'sensitive':
      return 'Sensitive skin reacts easily to products and environmental factors. It needs gentle, soothing formulations with minimal potential irritants.';
    default:
      return '';
  }
}

// Helper function to get concern name
function getConcernName(skinType, concern) {
  const concernMap = {
    'dry': {
      'hydration': 'hydration',
      'aging': 'anti-aging',
      'sensitive': 'sensitivity',
      'dullness': 'dullness'
    },
    'oily': {
      'acne': 'acne & breakouts',
      'pores': 'large pores',
      'oilcontrol': 'oil control',
      'blackheads': 'blackheads'
    },
    'combination': {
      'balance': 'balance',
      'acne': 'acne & breakouts',
      'aging': 'anti-aging',
      'hydration': 'targeted hydration'
    },
    'sensitive': {
      'redness': 'redness',
      'irritation': 'irritation',
      'strengthen': 'barrier repair',
      'gentle': 'gentle care'
