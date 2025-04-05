// Show a specific section and hide others
function showSection(sectionId) {
  const sections = document.querySelectorAll('.recommender-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  
  document.getElementById(sectionId).style.display = 'block';
  
  // Scroll to top of recommender
  document.querySelector('.skincare-recommender').scrollIntoView({ behavior: 'smooth' });
}

// Handle know skin type question
function handleKnowSkinType(knows) {
  if (knows) {
    showSection('skin-type-section');
  } else {
    // Reset discovery quiz
    discoveryAnswers = {
      dry: 0,
      oily: 0,
      combination: 0,
      sensitive: 0
    };
    currentQuestion = 1;
    
    // Hide all questions except the first one
    for (let i = 1; i <= 5; i++) {
      document.getElementById('question-' + i).style.display = i === 1 ? 'block' : 'none';
    }
    
    // Hide the result section
    document.getElementById('discovery-result').style.display = 'none';
    
    // Show the discovery section
    showSection('skin-discovery-section');
    cameFromDiscovery = true;
  }
}

// Handle skin type selection
function selectSkinType(skinType, clickEvent) {
  selectedSkinType = skinType;
  
  // Clear previous selections
  const options = document.querySelectorAll('#skin-type-section .option-card');
  options.forEach(option => {
    option.classList.remove('selected');
  });
  
  // Highlight selected option
  if (clickEvent && clickEvent.currentTarget) {
    clickEvent.currentTarget.classList.add('selected');
  } else {
    // Try to find and select the element by other means
    const selectedOption = document.querySelector(`#skin-type-section .option-card[data-skin-type="${skinType}"]`);
    if (selectedOption) {
      selectedOption.classList.add('selected');
    }
  }
  
  // Populate concerns based on skin type
  populateConcerns(skinType);
  
  // Show concerns section after a brief delay
  setTimeout(() => {
    showSection('concerns-section');
  }, 300);
}

// Handle discovery quiz answers
function selectDiscoveryAnswer(questionNum, skinType, clickEvent) {
  // Update scores
  discoveryAnswers[skinType]++;
  
  // Clear previous selections for this question
  const options = document.querySelectorAll('#question-' + questionNum + ' .answer-option');
  options.forEach(option => {
    option.classList.remove('selected');
  });
  
  // Highlight selected option
  if (clickEvent && clickEvent.currentTarget) {
    clickEvent.currentTarget.classList.add('selected');
  }
  
  // Move to next question or show results
  if (questionNum < 5) {
    setTimeout(() => {
      document.getElementById('question-' + questionNum).style.display = 'none';
      document.getElementById('question-' + (questionNum + 1)).style.display = 'block';
      currentQuestion = questionNum + 1;
    }, 300);
  } else {
    // Calculate result
    let maxScore = 0;
    let result = '';
    
    for (const [type, score] of Object.entries(discoveryAnswers)) {
      if (score > maxScore) {
        maxScore = score;
        result = type;
      }
    }
    
    // Display result
    const resultContent = document.getElementById('result-content');
    resultContent.innerHTML = `
      <p>Based on your answers, your skin type appears to be:</p>
      <h2 style="color: #4CAF50; margin: 15px 0;">${getFullSkinTypeName(result)}</h2>
      <p>${getSkinTypeDescription(result)}</p>
    `;
    
    // Store the result
    selectedSkinType = result;
    
    // Show the result section
    document.getElementById('discovery-result').style.display = 'block';
    
    // Hide the navigation buttons
    document.getElementById('discovery-nav').style.display = 'none';
  }
}

// Confirm skin type from discovery and continue
function confirmSkinType() {
  // Populate concerns based on skin type
  populateConcerns(selectedSkinType);
  
  // Show concerns section
  showSection('concerns-section');
}

// Populate concerns based on skin type
function populateConcerns(skinType) {
  const concernsContainer = document.getElementById('concerns-container');
  concernsContainer.innerHTML = '';
  
  let concerns = [];
  
  switch(skinType) {
    case 'dry':
      concerns = [
        { id: 'aging', name: 'Anti-Aging', desc: 'Fine lines, wrinkles, loss of firmness' },
        { id: 'dryness', name: 'Dryness', desc: 'Extreme dryness, flakiness, tight feeling' },
        { id: 'hyperpigmentation', name: 'Hyperpigmentation', desc: 'Dark spots and uneven skin tone' },
        { id: 'irritation', name: 'Irritation', desc: 'Redness, sensitivity' },
        { id: 'brightness', name: 'Brightness', desc: 'Improve overall skin radiance, uneven skin tone' },
        { id: 'large-pores', name: 'Large Pores', desc: 'Visible pores' },
        { id: 'acne', name: 'Acne & Breakouts', desc: 'Pimples, clogged pores, breakouts' },
        { id: 'oilcontrol', name: 'Oil Control', desc: 'Excess sebum, shininess' }
      ];
      break;
    case 'oily':
      concerns = [
        { id: 'aging', name: 'Anti-Aging', desc: 'Fine lines, wrinkles, loss of firmness' },
        { id: 'dryness', name: 'Dryness', desc: 'Extreme dryness, flakiness, tight feeling' },
        { id: 'hyperpigmentation', name: 'Hyperpigmentation', desc: 'Dark spots and uneven skin tone' },
        { id: 'irritation', name: 'Irritation', desc: 'Redness, sensitivity' },
        { id: 'brightness', name: 'Brightness', desc: 'Improve overall skin radiance, uneven skin tone' },
        { id: 'large-pores', name: 'Large Pores', desc: 'Visible pores' },
        { id: 'acne', name: 'Acne & Breakouts', desc: 'Pimples, clogged pores, breakouts' },
        { id: 'oilcontrol', name: 'Oil Control', desc: 'Excess sebum, shininess' }
      ];
      break;
    case 'combination':
      concerns = [
        { id: 'aging', name: 'Anti-Aging', desc: 'Fine lines, wrinkles, loss of firmness' },
        { id: 'dryness', name: 'Dryness', desc: 'Extreme dryness, flakiness, tight feeling' },
        { id: 'hyperpigmentation', name: 'Hyperpigmentation', desc: 'Dark spots and uneven skin tone' },
        { id: 'irritation', name: 'Irritation', desc: 'Redness, sensitivity' },
        { id: 'brightness', name: 'Brightness', desc: 'Improve overall skin radiance, uneven skin tone' },
        { id: 'large-pores', name: 'Large Pores', desc: 'Visible pores' },
        { id: 'acne', name: 'Acne & Breakouts', desc: 'Pimples, clogged pores, breakouts' },
        { id: 'oilcontrol', name: 'Oil Control', desc: 'Excess sebum, shininess' }
      ];
      break;
    case 'sensitive':
      concerns = [
        { id: 'aging', name: 'Anti-Aging', desc: 'Fine lines, wrinkles, loss of firmness' },
        { id: 'dryness', name: 'Dryness', desc: 'Extreme dryness, flakiness, tight feeling' },
        { id: 'hyperpigmentation', name: 'Hyperpigmentation', desc: 'Dark spots and uneven skin tone' },
        { id: 'irritation', name: 'Irritation', desc: 'Redness, sensitivity' },
        { id: 'brightness', name: 'Brightness', desc: 'Improve overall skin radiance, uneven skin tone' },
        { id: 'large-pores', name: 'Large Pores', desc: 'Visible pores' },
        { id: 'acne', name: 'Acne & Breakouts', desc: 'Pimples, clogged pores, breakouts' },
        { id: 'oilcontrol', name: 'Oil Control', desc: 'Excess sebum, shininess' }
      ];
      break;
  }
  // Add concerns to the container
  concerns.forEach(concern => {
    const concernCard = document.createElement('div');
    concernCard.className = 'option-card';
    concernCard.setAttribute('data-concern', concern.id);
    // Pass the event to the selectConcern function
    concernCard.onclick = function(event) { selectConcern(concern.id, event); };
    concernCard.innerHTML = `
      <h3>${concern.name}</h3>
      <p>${concern.desc}</p>
    `;
    concernsContainer.appendChild(concernCard);
  });
}

// Handle concern selection
function selectConcern(concern, clickEvent) {
  selectedConcern = concern;
  
  // Clear previous selections
  const options = document.querySelectorAll('#concerns-section .option-card');
  options.forEach(option => {
    option.classList.remove('selected');
  });
  
  // Highlight selected option if we have the event
  if (clickEvent && clickEvent.currentTarget) {
    clickEvent.currentTarget.classList.add('selected');
  } else {
    // Try to find and select the element by other means
    const selectedOption = document.querySelector(`#concerns-container .option-card[data-concern="${concern}"]`);
    if (selectedOption) {
      selectedOption.classList.add('selected');
    }
  }
  
  // Generate routine
  generateRoutine(selectedSkinType, selectedConcern);
  
  // Show results section after a brief delay
  setTimeout(() => {
    showSection('results-section');
  }, 300);
}

// Function to handle back button navigation
function backToPreviousSection() {
  if (cameFromDiscovery) {
    showSection('skin-discovery-section');
  } else {
    showSection('skin-type-section');
  }
}

// Reset the quiz
function resetQuiz() {
  selectedSkinType = '';
  selectedConcern = '';
  discoveryAnswers = {
    dry: 0,
    oily: 0,
    combination: 0,
    sensitive: 0
  };
  currentQuestion = 1;
  cameFromDiscovery = false;
  
  const options = document.querySelectorAll('.option-card, .answer-option');
  options.forEach(option => {
    option.classList.remove('selected');
  });
  
  document.getElementById('discovery-nav').style.display = 'flex';
  
  showSection('intro-section');
}
