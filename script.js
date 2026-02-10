// script.js
function copyPrompt(button) {
  // Find the textarea in the same card
  const textarea = button.parentElement.querySelector('textarea');
  
  // Select and copy the text
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices
  
  // Copy to clipboard
  navigator.clipboard.writeText(textarea.value).then(() => {
    // Change button text and style
    const originalText = button.textContent;
    button.textContent = '✓ Copied!';
    button.classList.add('copied');
    
    // Reset after 2 seconds
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    // Fallback for older browsers
    document.execCommand('copy');
    button.textContent = '✓ Copied!';
    button.classList.add('copied');
    
    setTimeout(() => {
      button.textContent = 'Copy Prompt';
      button.classList.remove('copied');
    }, 2000);
  });
}