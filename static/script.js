function translateText() {
    const text = document.getElementById("inputText").value;
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    if (!text.trim()) {
        alert("Please enter text to translate");
        return;
    }

    document.getElementById("outputText").value = "Translating...";

    fetch("/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            text: text,
            source: source,
            target: target
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("outputText").value = data.translated_text;
    })
    .catch(() => {
        document.getElementById("outputText").value = "Error occurred!";
    });
}

function copyText() {
    const output = document.getElementById("outputText");
    output.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}
