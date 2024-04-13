// Import the Tesseract library
const Tesseract = require('tesseract.js');

// Function to extract text from image
async function extractTextFromImage(imagePath) {
  try {
    // Load the image
    let image = await loadImage(imagePath);

    // Recognize the text
    let result = await Tesseract.recognize(image, 'eng', { logger: m => console.log(m) });

    // Return the recognized text
    return result.data.text;
  } catch (error) {
    console.error(error);
  }
}

// Usage
extractTextFromImage('path_to_your_image.jpg')
  .then(text => console.log(text))
  .catch(error => console.error(error));
// Import the Tesseract library
const Tesseract = require('tesseract.js');

// Function to extract text from image
async function extractTextFromImage(imagePath) {
  try {
    // Load the image
    let image = await loadImage(imagePath);

    // Recognize the text
    let result = await Tesseract.recognize(image, 'eng', { logger: m => console.log(m) });

    // Return the recognized text
    return result.data.text;
  } catch (error) {
    console.error(error);
  }
}

// Usage
extractTextFromImage('path_to_your_image.jpg')
  .then(text => console.log(text))
  .catch(error => console.error(error));
