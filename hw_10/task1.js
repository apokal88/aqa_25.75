function showText (text, timeOut) {
    setTimeout(() => {
        console.log(text)
      }, timeOut);
}

showText("your text", 2000);