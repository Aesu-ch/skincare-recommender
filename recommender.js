// Skincare Recommender
// Main JavaScript file

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create the quiz container if it doesn't exist
  if (!document.getElementById('skincare-recommender')) {
    const container = document.createElement('div');
    container.id = 'skincare-recommender';
    container.className = 'skincare-recommender';
    document.body.appendChild(container);
  }
  
  // Initialize the quiz
  initSkinCareQuiz();
});

// Variables to store user selections
let selectedSkinType = '';
let selectedConcern = '';
let discoveryAnswers = {
  dry: 0,
  oily: 0,
  combination: 0,
  sensitive: 0
};
let currentQuestion = 1;
let cameFromDiscovery = false;

// Initialize the quiz
function initSkinCareQuiz() {
  const container = document.getElementById('skincare-recommender');
  container.innerHTML = `
    <!-- Introduction Section -->
    <div id="intro-section" style="text-align: center; margin-bottom: 40px;">
      <h1>Find Your Perfect Skincare Routine</h1>
      <p>Answer a few simple questions to discover products that work best for your unique skin.</p>
      <button onclick="showSection('know-skintype-section')" class="recommender-button">Get Started</button>
    </div>

    <!-- Know Skin Type Question Section -->
    <div id="know-skintype-section" class="recommender-section" style="display: none; text-align: center;">
      <h2>Do you know your skin type?</h2>
      <div class="options-container" style="max-width: 500px; margin: 30px auto;">
        <div class="option-card wider" onclick="handleKnowSkinType(true)">
          <h3>Yes, I know my skin type</h3>
          <p>I can identify whether my skin is dry, oily, combination, or sensitive</p>
        </div>
        <div class="option-card wider" onclick="handleKnowSkinType(false)">
          <h3>No, I'm not sure</h3>
          <p>I'd like help determining my skin type</p>
        </div>
      </div>
      <div class="nav-buttons">
        <button onclick="showSection('intro-section')" class="back-button">Back</button>
      </div>
    </div>

    <!-- Skin Type Section (for those who know) -->
    <div id="skin-type-section" class="recommender-section" style="display: none;">
      <h2>What's Your Skin Type?</h2>
      <div class="options-container">
        <div class="option-card" onclick="selectSkinType('dry')">
          <h3>Dry Skin</h3>
          <p>Tight, flaky, or rough skin that needs hydration</p>
        </div>
        <div class="option-card" onclick="selectSkinType('oily')">
          <h3>Oily Skin</h3>
          <p>Excess oil, shine, or enlarged pores</p>
        </div>
        <div class="option-card" onclick="selectSkinType('combination')">
          <h3>Combination Skin</h3>
          <p>Oily T-zone with dry cheeks</p>
        </div>
        <div class="option-card" onclick="selectSkinType('sensitive')">
          <h3>Sensitive Skin</h3>
          <p>Easily irritated, redness, or reactive skin</p>
        </div>
      </div>
      <div class="nav-buttons">
        <button onclick="showSection('know-skintype-section')" class="back-button">Back</button>
      </div>
    </div>

    <!-- Skin Type Discovery Quiz Section -->
    <div id="skin-discovery-section" class="recommender-section" style="display: none;">
      <h2>Let's Discover Your Skin Type</h2>
      <p>Answer these questions to help determine your skin type:</p>
      
      <div id="discovery-questions" class="discovery-quiz">
        <div class="question-card" id="question-1">
          <h3>Question 1: How does your skin feel after cleansing?</h3>
          <div class="answer-options">
            <div class="answer-option" onclick="selectDiscoveryAnswer(1, 'dry')">
              <p>Tight, dry or slightly uncomfortable</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(1, 'oily')">
              <p>Still feels oily or shiny, especially in the T-zone</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(1, 'combination')">
              <p>Tight in some areas (like cheeks) but still oily in others (like forehead)</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(1, 'sensitive')">
              <p>Irritated, stinging, or reddened</p>
            </div>
          </div>
        </div>
        
        <div class="question-card" id="question-2" style="display: none;">
          <h3>Question 2: By mid-day, how does your skin look?</h3>
          <div class="answer-options">
            <div class="answer-option" onclick="selectDiscoveryAnswer(2, 'dry')">
              <p>Feels dry, might have some flaky patches</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(2, 'oily')">
              <p>Shiny and oily all over</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(2, 'combination')">
              <p>Oily in the T-zone, normal to dry elsewhere</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(2, 'sensitive')">
              <p>Can become red or irritated easily, especially with new products</p>
            </div>
          </div>
        </div>
        
        <div class="question-card" id="question-3" style="display: none;">
          <h3>Question 3: How often do you experience breakouts?</h3>
          <div class="answer-options">
            <div class="answer-option" onclick="selectDiscoveryAnswer(3, 'dry')">
              <p>Rarely have breakouts, but skin can look dull</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(3, 'oily')">
              <p>Frequently experience breakouts and clogged pores</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(3, 'combination')">
              <p>Occasional breakouts, mainly in the T-zone</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(3, 'sensitive')">
              <p>Sometimes have breakouts, especially when using new products</p>
            </div>
          </div>
        </div>
        
        <div class="question-card" id="question-4" style="display: none;">
          <h3>Question 4: How does your skin react to new products?</h3>
          <div class="answer-options">
            <div class="answer-option" onclick="selectDiscoveryAnswer(4, 'dry')">
              <p>Often feels more moisturized but might still feel tight</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(4, 'oily')">
              <p>Can feel greasy or lead to breakouts if too heavy</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(4, 'combination')">
              <p>Different reactions in different areas of the face</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(4, 'sensitive')">
              <p>Often experience redness, stinging, or irritation</p>
            </div>
          </div>
        </div>
        
        <div class="question-card" id="question-5" style="display: none;">
          <h3>Question 5: What are your main skin concerns?</h3>
          <div class="answer-options">
            <div class="answer-option" onclick="selectDiscoveryAnswer(5, 'dry')">
              <p>Dryness, flakiness, or lack of radiance</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(5, 'oily')">
              <p>Excess oil, shine, acne, or large pores</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(5, 'combination')">
              <p>Different issues in different areas (oily T-zone, dry cheeks)</p>
            </div>
            <div class="answer-option" onclick="selectDiscoveryAnswer(5, 'sensitive')">
              <p>Redness, irritation, or reacting to products</p>
            </div>
          </div>
        </div>
        
        <div id="discovery-result" style="display: none; text-align: center; margin-top: 30px;">
          <h3>Your Skin Type Results</h3>
          <div id="result-content"></div>
          <button onclick="confirmSkinType()" class="recommender-button" style="margin-top: 20px;">Continue</button>
        </div>
      </div>
      
      <div class="nav-buttons" id="discovery-nav">
        <button onclick="showSection('know-skintype-section')" class="back-button">Back</button>
      </div>
    </div>

    <!-- Concerns Section (will be dynamically populated) -->
    <div id="concerns-section" class="recommender-section" style="display: none;">
      <h2>What's Your Main Concern?</h2>
      <div id="concerns-container" class="options-container">
        <!-- Concerns will be added here dynamically -->
      </div>
      <div class="nav-buttons">
        <button onclick="backToPreviousSection()" class="back-button">Back</button>
      </div>
    </div>

    <!-- Results Section -->
    <div id="results-section" class="recommender-section" style="display: none;">
      <h2>Your Personalized Skincare Routine</h2>
      <div id="routine-intro"></div>
      
      <h3>Morning Routine</h3>
      <div id="morning-routine" class="routine-container">
        <!-- Morning routine will be added here dynamically -->
      </div>
      
      <h3>Evening Routine</h3>
      <div id="evening-routine" class="routine-container">
        <!-- Evening routine will be added here dynamically -->
      </div>
      
      <div id="skin-tips" class="tips-container">
        <!-- Tips will be added here dynamically -->
      </div>
      
      <div class="nav-buttons">
        <button onclick="showSection('concerns-section')" class="back-button">Back</button>
        <button onclick="resetQuiz()" class="recommender-button">Start Over</button>
      </div>
    </div>
  `;
  
  // Show the intro section
  showSection('intro-section');
}
