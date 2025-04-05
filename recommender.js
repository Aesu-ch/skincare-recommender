// Skincare Recommender
// Main JavaScript file

// Variables to store user selections
let selectedSkinType = '';
let selectedConcerns = [];
let discoveryAnswers = {
  dry: 0,
  oily: 0,
  combination: 0,
  sensitive: 0
};
let currentQuestion = 1;
let cameFromDiscovery = false;

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
    <div id="skin-type-section" class="recommender-section" style="display: none; text-align: center;">
      <h2>What's Your Skin Type?</h2>
      <div class="options-container" style="max-width: 500px; margin: 30px auto;">
        <div class="option-card" data-skin-type="dry" onclick="selectSkinType('dry', event)">
          <h3>Dry Skin</h3>
          <p>Tight, flaky, or rough skin that needs hydration</p>
        </div>
        <div class="option-card" data-skin-type="oily" onclick="selectSkinType('oily', event)">
          <h3>Oily Skin</h3>
          <p>Excess oil, shine, or enlarged pores</p>
        </div>
        <div class="option-card" data-skin-type="combination" onclick="selectSkinType('combination', event)">
          <h3>Combination Skin</h3>
          <p>Oily T-zone with dry cheeks</p>
        </div>
        <div class="option-card" data-skin-type="sensitive" onclick="selectSkinType('sensitive', event)">
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
      <h2 style="text-align: center;">Let's Discover Your Skin Type</h2>
      <p style="text-align: center;">Answer these questions to help determine your skin type:</p>
      
      <div id="discovery-questions" class="discovery-quiz">
        <div class="question-card" id="question-1" style="text-align: center;">
          <h3>Question 1: How does your skin feel after cleansing?</h3>
          <div class="options-container" style="max-width: 500px; margin: 30px auto;">
            <div class="option-card" onclick="selectDiscoveryAnswer(1, 'dry', event)">
              <h3>Tight and Dry</h3>
              <p>Tight, dry or slightly uncomfortable after cleansing</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(1, 'oily', event)">
              <h3>Still Oily</h3>
              <p>Feels oily or shiny, especially in the T-zone</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(1, 'combination', event)">
              <h3>Mixed Feelings</h3>
              <p>Tight in some areas (like cheeks) but still oily in others (like forehead)</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(1, 'sensitive', event)">
              <h3>Irritated</h3>
              <p>Feels irritated, stinging, or reddened after cleansing</p>
            </div>
          </div>
        </div>
        
        <div class="question-card" id="question-2" style="display: none; text-align: center;">
          <h3>Question 2: By mid-day, how does your skin look?</h3>
          <div class="options-container" style="max-width: 500px; margin: 30px auto;">
            <div class="option-card" onclick="selectDiscoveryAnswer(2, 'dry', event)">
              <h3>Dry and Flaky</h3>
              <p>Feels dry, might have some flaky patches by midday</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(2, 'oily', event)">
              <h3>Very Shiny</h3>
              <p>Shiny and oily all over by midday</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(2, 'combination', event)">
              <h3>Uneven Shine</h3>
              <p>Oily in the T-zone, normal to dry elsewhere</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(2, 'sensitive', event)">
              <h3>Reactive</h3>
              <p>Can become red or irritated easily, especially with environmental changes</p>
            </div>
          </div>
        </div>
        
        <div class="question-card" id="question-3" style="display: none; text-align: center;">
          <h3>Question 3: How often do you experience breakouts?</h3>
          <div class="options-container" style="max-width: 500px; margin: 30px auto;">
            <div class="option-card" onclick="selectDiscoveryAnswer(3, 'dry', event)">
              <h3>Rarely</h3>
              <p>Rarely have breakouts, but skin can look dull</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(3, 'oily', event)">
              <h3>Frequent Breakouts</h3>
              <p>Frequently experience breakouts and clogged pores</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(3, 'combination', event)">
              <h3>Occasional Breakouts</h3>
              <p>Occasional breakouts, mainly in the T-zone</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(3, 'sensitive', event)">
              <h3>Product-Triggered</h3>
              <p>Sometimes have breakouts, especially when using new products</p>
            </div>
          </div>
        </div>
        
        <div class="question-card" id="question-4" style="display: none; text-align: center;">
          <h3>Question 4: How does your skin react to new products?</h3>
          <div class="options-container" style="max-width: 500px; margin: 30px auto;">
            <div class="option-card" onclick="selectDiscoveryAnswer(4, 'dry', event)">
              <h3>Needs Moisture</h3>
              <p>Often feels more moisturized but might still feel tight</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(4, 'oily', event)">
              <h3>Prone to Greasiness</h3>
              <p>Can feel greasy or lead to breakouts if too heavy</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(4, 'combination', event)">
              <h3>Varied Reactions</h3>
              <p>Different reactions in different areas of the face</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(4, 'sensitive', event)">
              <h3>Easily Irritated</h3>
              <p>Often experience redness, stinging, or irritation</p>
            </div>
          </div>
        </div>
        
        <div class="question-card" id="question-5" style="display: none; text-align: center;">
          <h3>Question 5: What are your main skin concerns?</h3>
          <div class="options-container" style="max-width: 500px; margin: 30px auto;">
            <div class="option-card" onclick="selectDiscoveryAnswer(5, 'dry', event)">
              <h3>Dryness Issues</h3>
              <p>Dryness, flakiness, or lack of radiance</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(5, 'oily', event)">
              <h3>Oiliness Issues</h3>
              <p>Excess oil, shine, acne, or large pores</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(5, 'combination', event)">
              <h3>Combination Issues</h3>
              <p>Different issues in different areas (oily T-zone, dry cheeks)</p>
            </div>
            <div class="option-card" onclick="selectDiscoveryAnswer(5, 'sensitive', event)">
              <h3>Sensitivity Issues</h3>
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
      <h2>What Are Your Skin Concerns?</h2>
      <p style="text-align: center;">Select all that apply to your skin</p>
      <div id="concerns-container" class="options-container">
        <!-- Concerns will be added here dynamically -->
      </div>
      <div class="nav-buttons">
        <button onclick="backToPreviousSection()" class="back-button">Back</button>
        <!-- Confirm button will be added dynamically by JavaScript -->
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
