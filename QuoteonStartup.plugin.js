/**
 * @name QuoteonStartup
 * @author saulgoodman7277
 * @description Displays a random quote everytime you launch discord.
 * @version 0.0.1
 */

module.exports = class QuoteOnStartup {
    start() {
        this.displayQuote();
    }

    stop() {
        
    }

    displayQuote() {
        const quotes = [
            "The only way to do great work is to love what you do. – Steve Jobs",
            "Innovation distinguishes between a leader and a follower. – Steve Jobs",
            "It does not matter how slowly you go as long as you do not stop. – Confucius",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        ];

        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];

        BdApi.alert("A Random Quote", quote);
    }
}