document.addEventListener("DOMContentLoaded", () => {
    const facts = [
      "The first rom-com is usually considered 'It Happened One Night' (1934).",
      "Crazy Rich Asians was the first major Hollywood rom-com with an all-Asian cast in 25 years.",
      "Rom-coms often use the 'meet-cute' to start the story.",
      "10 Things I Hate About You helped launch Heath Ledger's career.",
      "500 Days of Summer doesn’t have a traditional happy ending."
    ];

    const button = document.getElementById("factButton");
    const display = document.getElementById("factDisplay");

    button.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        display.innerText = facts[randomIndex];
    });
});