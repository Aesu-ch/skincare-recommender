// Generate personalized routine for multiple concerns
function generateRoutineForMultipleConcerns(skinType, concernIds) {
  // Set routine intro
  const routineIntro = document.getElementById('routine-intro');
  routineIntro.innerHTML = `
    <p>Based on your ${getSkinTypeName(skinType)} skin and your selected concerns:</p>
    <ul class="selected-concerns-list">
      ${concernIds.map(concern => `<li>${getConcernName(skinType, concern)}</li>`).join('')}
    </ul>
    <p>We've created this personalized routine using products perfect for your needs.</p>
  `;
  
  // Generate morning routine
  const morningRoutine = document.getElementById('morning-routine');
  morningRoutine.innerHTML = '';
  
  // Generate evening routine
  const eveningRoutine = document.getElementById('evening-routine');
  eveningRoutine.innerHTML = '';
  
  // Generate tips
  const skinTips = document.getElementById('skin-tips');
  
  // Get the primary concern (first selected)
  const primaryConcern = concernIds[0];
  
  // Base routine for skin type (regardless of concerns)
  let baseRoutineAdded = false;
  
  // Set base routine by skin type
  if (skinType === 'dry') {
    // Base routine for dry skin
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
      
      <div class="routine-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>Hydrating Toner</h4>
          <div class="product-card">
            <img src="YOUR-PRODUCT-IMAGE-URL" alt="Hydrating Toner" class="product-image">
            <div class="product-info">
              <h4>Moisture Boosting Toner</h4>
              <p>Alcohol-free toner that adds a first layer of hydration</p>
              <a href="/products/your-toner-url" class="product-button">View Product</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="routine-step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h4>Moisturizer</h4>
          <div class="product-card">
            <img src="YOUR-PRODUCT-IMAGE-URL" alt="Moisturizer" class="product-image">
            <div class="product-info">
              <h4>Rich Moisturizing Cream</h4>
              <p>Nourishing moisturizer for dry skin</p>
              <a href="/products/your-moisturizer-url" class="product-button">View Product</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="routine-step">
        <div class="step-number">5</div>
        <div class="step-content">
          <h4>Sunscreen</h4>
          <div class="product-card">
            <img src="YOUR-PRODUCT-IMAGE-URL" alt="Sunscreen" class="product-image">
            <div class="product-info">
              <h4>Hydrating Sunscreen SPF 50</h4>
              <p>Protection with added moisture benefits</p>
              <a href="/products/your-sunscreen-url" class="product-button">View Product</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
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
      
      <div class="routine-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>Water-based Cleanser</h4>
          <div class="product-card">
            <img src="YOUR-PRODUCT-IMAGE-URL" alt="Water Cleanser" class="product-image">
            <div class="product-info">
              <h4>Gentle Hydrating Cleanser</h4>
              <p>Completes the double cleansing process without drying skin</p>
              <a href="/products/your-water-cleanser-url" class="product-button">View Product</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="routine-step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4>Hydrating Toner</h4>
          <div class="product-card">
            <img src="YOUR-PRODUCT-IMAGE-URL" alt="Evening Toner" class="product-image">
            <div class="product-info">
              <h4>Moisture Boosting Toner</h4>
              <p>Preps skin for treatments</p>
              <a href="/products/your-evening-toner-url" class="product-button">View Product</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="routine-step">
        <div class="step-number">5</div>
        <div class="step-content">
          <h4>Night Moisturizer</h4>
          <div class="product-card">
            <img src="YOUR-PRODUCT-IMAGE-URL" alt="Night Cream" class="product-image">
            <div class="product-info">
              <h4>Rich Night Cream</h4>
              <p>Intensive overnight moisture</p>
              <a href="/products/your-night-cream-url" class="product-button">View Product</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    baseRoutineAdded = true;
  } else if (skinType === 'oily') {
    // Similar structure for oily skin base routine
    baseRoutineAdded = true;
  } else if (skinType === 'combination') {
    // Similar structure for combination skin base routine
    baseRoutineAdded = true;
  } else if (skinType === 'sensitive') {
    // Similar structure for sensitive skin base routine
    baseRoutineAdded = true;
  }
  
  // Create a treatments container for morning and evening routines
  let morningTreatmentsStep = document.createElement('div');
  morningTreatmentsStep.className = 'routine-step';
  morningTreatmentsStep.innerHTML = `
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Targeted Treatments</h4>
      <div class="treatments-container"></div>
    </div>
  `;
  
  let eveningTreatmentsStep = document.createElement('div');
  eveningTreatmentsStep.className = 'routine-step';
  eveningTreatmentsStep.innerHTML = `
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Targeted Treatments</h4>
      <div class="treatments-container"></div>
    </div>
  `;
  
  // Find positions to insert treatments
  const morningMoisturizerStep = morningRoutine.querySelector('.routine-step:nth-child(4)');
  const eveningMoisturizerStep = eveningRoutine.querySelector('.routine-step:nth-child(4)');
  
  if (morningMoisturizerStep) {
    morningRoutine.insertBefore(morningTreatmentsStep, morningMoisturizerStep);
  } else {
    morningRoutine.appendChild(morningTreatmentsStep);
  }
  
  if (eveningMoisturizerStep) {
    eveningRoutine.insertBefore(eveningTreatmentsStep, eveningMoisturizerStep);
  } else {
    eveningRoutine.appendChild(eveningTreatmentsStep);
  }
  
  const morningTreatmentsContainer = morningRoutine.querySelector('.treatments-container');
  const eveningTreatmentsContainer = eveningRoutine.querySelector('.treatments-container');
  
  // Add concern-specific treatments
  concernIds.forEach(concernId => {
    switch(concernId) {
      case 'aging':
        // Add anti-aging treatment
        eveningTreatmentsContainer.innerHTML += `
          <div class="product-card highlighted-card">
            <div class="concern-tag">For Anti-Aging</div>
            <img src="YOUR-AGING-PRODUCT-IMAGE-URL" alt="Anti-Aging Serum" class="product-image">
            <div class="product-info">
              <h4>Advanced Anti-Aging Serum</h4>
              <p>Targets fine lines and wrinkles with peptides</p>
              <a href="/products/your-anti-aging-serum" class="product-button">View Product</a>
            </div>
          </div>
        `;
        break;
        
      case 'dryness':
        // Add extreme hydration treatment
        morningTreatmentsContainer.innerHTML += `
          <div class="product-card highlighted-card">
            <div class="concern-tag">For Dryness</div>
            <img src="YOUR-HYDRATION-PRODUCT-IMAGE-URL" alt="Hydration Serum" class="product-image">
            <div class="product-info">
              <h4>Intensive Hydration Serum</h4>
              <p>Deep hydration with multiple molecular weights of hyaluronic acid</p>
              <a href="/products/your-hydration-serum" class="product-button">View Product</a>
            </div>
          </div>
        `;
        break;
        
      case 'hyperpigmentation':
        // Add brightening treatment
        morningTreatmentsContainer.innerHTML += `
          <div class="product-card highlighted-card">
            <div class="concern-tag">For Hyperpigmentation</div>
            <img src="YOUR-BRIGHTENING-PRODUCT-IMAGE-URL" alt="Brightening Serum" class="product-image">
            <div class="product-info">
              <h4>Vitamin C Brightening Serum</h4>
              <p>Targets dark spots and evens skin tone</p>
              <a href="/products/your-brightening-serum" class="product-button">View Product</a>
            </div>
          </div>
        `;
        break;
        
      case 'irritation':
        // Add soothing treatment
        eveningTreatmentsContainer.innerHTML += `
          <div class="product-card highlighted-card">
            <div class="concern-tag">For Irritation</div>
            <img src="YOUR-SOOTHING-PRODUCT-IMAGE-URL" alt="Soothing Serum" class="product-image">
            <div class="product-info">
              <h4>Cica Repair Serum</h4>
              <p>Calms irritation and strengthens skin barrier</p>
              <a href="/products/your-soothing-serum" class="product-button">View Product</a>
            </div>
          </div>
        `;
        break;
        
      case 'brightness':
        // Add brightening treatment
        morningTreatmentsContainer.innerHTML += `
          <div class="product-card highlighted-card">
            <div class="concern-tag">For Brightness</div>
            <img src="YOUR-GLOW-PRODUCT-IMAGE-URL" alt="Glow Serum" class="product-image">
            <div class="product-info">
              <h4>Radiance Boosting Serum</h4>
              <p>Enhances skin's natural glow and radiance</p>
              <a href="/products/your-glow-serum" class="product-button">View Product</a>
            </div>
          </div>
        `;
        break;
        
      case 'large-pores':
        // Add pore minimizing treatment
        eveningTreatmentsContainer.innerHTML += `
          <div class="product-card highlighted-card">
            <div class="concern-tag">For Large Pores</div>
            <img src="YOUR-PORE-PRODUCT-IMAGE-URL" alt="Pore Treatment" class="product-image">
            <div class="product-info">
              <h4>Pore Minimizing Serum</h4>
              <p>Refines pore appearance over time</p>
              <a href="/products/your-pore-serum" class="product-button">View Product</a>
            </div>
          </div>
        `;
        break;
        
      case 'acne':
        // Add acne treatment
        eveningTreatmentsContainer.innerHTML += `
          <div class="product-card highlighted-card">
            <div class="concern-tag">For Acne</div>
            <img src="YOUR-ACNE-PRODUCT-IMAGE-URL" alt="Acne Treatment" class="product-image">
            <div class="product-info">
              <h4>Blemish Control Serum</h4>
              <p>Targets and treats active breakouts</p>
              <a href="/products/your-acne-serum" class="product-button">View Product</a>
            </div>
          </div>
        `;
        break;
        
      case 'oilcontrol':
        // Add oil control treatment
        morningTreatmentsContainer.innerHTML += `
          <div class="product-card highlighted-card">
            <div class="concern-tag">For Oil Control</div>
            <img src="YOUR-OIL-CONTROL-PRODUCT-IMAGE-URL" alt="Oil Control Treatment" class="product-image">
            <div class="product-info">
              <h4>Oil Balancing Serum</h4>
              <p>Regulates sebum production throughout the day</p>
              <a href="/products/your-oil-control-serum" class="product-button">View Product</a>
            </div>
          </div>
        `;
        break;
    }
  });
  
  // Check if any treatments were added
  if (morningTreatmentsContainer.innerHTML === '') {
    morningTreatmentsStep.style.display = 'none';
  }
  
  if (eveningTreatmentsContainer.innerHTML === '') {
    eveningTreatmentsStep.style.display = 'none';
  }
  
  // Add tips based on combined concerns
  let tipsList = [];
  
  // Generic tips for all routines
  tipsList.push('Consistency is key for seeing results');
  tipsList.push('Apply products from thinnest to thickest consistency');
  
  // Concern-specific tips
  if (concernIds.includes('dryness')) {
    tipsList.push('Use lukewarm water instead of hot water');
    tipsList.push('Apply products to slightly damp skin for better absorption');
  }
  
  if (concernIds.includes('aging')) {
    tipsList.push('Apply anti-aging products with gentle upward motions');
    tipsList.push('Don\'t forget to extend products to your neck and décolletage');
  }
  
  if (concernIds.includes('hyperpigmentation')) {
    tipsList.push('Use sunscreen religiously to prevent further darkening');
    tipsList.push('Be patient with brightening products - results take 4-8 weeks');
  }
  
  if (concernIds.includes('irritation')) {
    tipsList.push('Patch test new products before adding them to your routine');
    tipsList.push('Avoid fragranced products if your skin is sensitive');
  }
  
  if (concernIds.includes('acne')) {
    tipsList.push('Don\'t over-exfoliate acne-prone skin');
    tipsList.push('Avoid touching your face throughout the day');
  }
  
  if (concernIds.includes('oilcontrol')) {
    tipsList.push('Use oil-control products primarily in your T-zone');
    tipsList.push('Don\'t skip moisturizer - dehydration can increase oil production');
  }
  
  // Render tips
  skinTips.innerHTML = `
    <h3>Pro Tips for Your Skin:</h3>
    <ul>
      ${tipsList.map(tip => `<li>${tip}</li>`).join('')}
    </ul>
  `;
  
  // Default content if no specific routine is defined
  if (!baseRoutineAdded) {
    morningRoutine.innerHTML = `
      <p>We're currently building your specific routine. Please check back soon or contact us for personalized recommendations!</p>
    `;
    
    eveningRoutine.innerHTML = `
      <p>We're currently building your specific routine. Please check back soon or contact us for personalized recommendations!</p>
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
  const concernNames = {
    'aging': 'Anti-Aging',
    'dryness': 'Dryness',
    'hyperpigmentation': 'Hyperpigmentation',
    'irritation': 'Irritation',
    'brightness': 'Brightness',
    'large-pores': 'Large Pores',
    'acne': 'Acne & Breakouts',
    'oilcontrol': 'Oil Control'
  };
  
  return concernNames[concern] || concern;
}
