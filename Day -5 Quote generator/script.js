const quoteText = document.querySelector(".quote");
const Quotebtn = document.getElementById("btn");
const authorName = document.querySelector(".author .name");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

function randomQuote(){
    Quotebtn.innerText = "loading Quote..."
    fetch("https://quotes-api-self.vercel.app/quote").then(response => response.json()).then(result => {
        quoteText.innerHTML = result.quote;
        authorName.innerHTML = result.author;
         Quotebtn.innerText = "New Quote";
    })
}

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerHTML);
});

twitterBtn.addEventListener("click",()=>{
 let twitUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
 window.open(twitUrl,"_blank");
})
Quotebtn.addEventListener("click",randomQuote);