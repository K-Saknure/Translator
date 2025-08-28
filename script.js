async function translateText() {
    const inputText = document.getElementById("inputText").value.trim();
    const sourceLang = document.getElementById("sourceLang").value;
    const targetLang = document.getElementById("targetLang").value;
    const outputBox = document.getElementById("outputBox");
  
    if (!inputText) {
      outputBox.innerText = "Please enter some text.";
      return;
    }
  
    const encodedText = encodeURIComponent(inputText);
  
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${sourceLang}|${targetLang}`
      );
  
      const data = await response.json();
      const translated = data.responseData.translatedText;
  
      outputBox.innerText = translated || "No translation available.";
    } catch (error) {
      outputBox.innerText = "Translation failed. " + error.message;
      console.error("Translation Error:", error);
    }
  }
  