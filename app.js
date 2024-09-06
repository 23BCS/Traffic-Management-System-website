let scollContainer =document.querySelector(".gallery");
let backBtn =document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");



scollContainer.addEventListener("wheel", (e)=>{
    e.preventDefault();
    scollContainer.scrollLeft += e.deltaY;
    scollContainer.Style.scrollBehavior="auto";
});


nextBtn.addEventListener("click", ()=>{
    scollContainer.style.scrollBehavior="smooth";
    scollContainer.scrollLeft += 900;

});
backBtn.addEventListener("click", ()=>{
    scollContainer.style.scrollBehavior="smooth";
    scollContainer.scrollLeft -= 900;

});

// apppi calll




async function fetchTrafficNews() {
    try {
        // Replace 'YOUR_API_ENDPOINT' with the actual traffic news API URL
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=india&apiKey=0c227d95e39a425ca6882ac71796194a', {
            method: 'GET',
            headers: {
                'Content-Type': 'traffic news',
                // Add any necessary headers or API keys here
            }
        });
               
        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Assuming the API returns a list of news, you can extract it
        const trafficNews = data.articles.map(article => `${article.title}: ${article.description}`).join('\n\n');

        // Append the news to the textarea
        document.getElementById('trafficNews').value = trafficNews;
    } catch (error) {
        console.error('Error fetching traffic news:', error);
        document.getElementById('trafficNews').value = 'Failed to load traffic news.';
    }
}
