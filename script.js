function copyPrompt(btn) {
  const textarea = btn.previousElementSibling;
  textarea.select();
  document.execCommand("copy");
  btn.innerText = "Copied ✅";
  setTimeout(() => {
    btn.innerText = "Copy Prompt";
  }, 2000);
}
