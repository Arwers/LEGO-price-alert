// function to convert lego set id to url
function idToURL(legoSetId) {
        return "https://www.lego.com/pl-pl/product/" + legoSetId;
}

document.addEventListener("DOMContentLoaded", function() {
    // Listen for click event on the search button
    document.getElementById("search-button").addEventListener("click", function() {
        // Get the input field value
        var input = document.getElementById("search-set").value;
    
        // Open new tab with the search result
        window.open(idToURL(input), '_blank');
    });
});