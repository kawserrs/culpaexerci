function height(view) {
    if (!view) {
        throw new Error("The view parameter is required.");
    }

    // Check if the input is a valid DOM element
    if (!(view instanceof HTMLElement)) {
        throw new Error("The view parameter should be a valid HTML element.");
    }

    // Get the height of the element including padding but excluding borders, margins, and scrollbars
    return view.clientHeight;
}

// Usage example:
var element = document.getElementById('myElement');
console.log(height(element));
