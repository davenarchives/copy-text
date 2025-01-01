document.getElementById('copyButton').addEventListener('click', () => {
    const text = document.getElementById('textCopy').value;
    navigator.clipboard.writeText(text)
    .then (() => {
        alert('Text copied to clipboard!');
    })
});
