async function analyzeImage() {
    const inputImage = document.getElementById('inputImage');
    const tagsElement = document.getElementById('tags');
    const captionElement = document.getElementById('caption');
    const metadataElement = document.getElementById('metadata');
    

    if (!inputImage.files.length) {
        return alert('Please select an image');
    }

    const imageFile = inputImage.files[0];
    const imageUrl = URL.createObjectURL(imageFile);

    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const reader = new FileReader();
    reader.onloadend = async () => {
        const arrayBuffer = reader.result;
        const uint8Array = new Uint8Array(arrayBuffer);

        const fetchPromise = fetch('https://southeastasia.api.cognitive.microsoft.com/vision/v3.1/analyze?visualFeatures=Description,Tags', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key': '8cbc1f7142484fcc8219c91c4b8dc84a'
            },
            body: uint8Array
        });

        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('The AI took too long to generate a response. Please use a different image and try again!')), 10000));

        try {
            const response = await Promise.race([fetchPromise, timeoutPromise]);
            const data = await response.json();

            // Display tags
            let tagsHtml = '<h2>Tags</h2><ul>';
            data.tags.forEach(tag => {
                tagsHtml += `<li>${tag.name}</li>`;
            });
            tagsHtml += '</ul>';
            tagsElement.innerHTML = tagsHtml;

            // Display caption
            let captionHtml = '<h2>Caption</h2>';
            captionHtml += `<p>${data.description.captions[0].text}</p>`;
            captionElement.innerHTML = captionHtml;

            // Display metadata
            let metadataHtml = '<h2>Metadata</h2><ul>';
            for (const key in data.metadata) {
                metadataHtml += `<li>${key}: ${data.metadata[key]}</li>`;
            }
            metadataHtml += '</ul>';
            metadataElement.innerHTML = metadataHtml;
        } catch (error) {
            alert(error.message);
        }

        document.getElementById('tags').classList.add('results-displayed');
        document.getElementById('caption').classList.add('results-displayed');
        document.getElementById('metadata').classList.add('results-displayed');
    };

    reader.readAsArrayBuffer(blob);
}

