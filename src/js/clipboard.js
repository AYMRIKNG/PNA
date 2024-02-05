function CopieToClip() {
    var range = document.createRange();
    range.selectNode(document.getElementById("ToCopie"));
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range); // Select the text
    document.execCommand("copy"); // Copy the selected text
    window.getSelection().removeAllRanges(); // Clear the selection

    alert("Le numéro a été copié dans le presse-papiers.");
}