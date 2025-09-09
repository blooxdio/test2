document.addEventListener('DOMContentLoaded', () => {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const resultFrame = document.getElementById('result-frame');

    function updatePreview() {
        const html = htmlCode.value;
        const css = cssCode.value;
        const js = jsCode.value;

        const sourceDocument = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    ${css}
                </style>
            </head>
            <body>
                ${html}
                <script>
                    try {
                        ${js}
                    } catch (e) {
                        console.error(e);
                    }
                </script>
            </body>
            </html>
        `;

        resultFrame.srcdoc = sourceDocument;
    }

    // Update the preview on any input in the textareas
    htmlCode.addEventListener('input', updatePreview);
    cssCode.addEventListener('input', updatePreview);
    jsCode.addEventListener('input', updatePreview);

    // Initial update on page load
    updatePreview();
});
