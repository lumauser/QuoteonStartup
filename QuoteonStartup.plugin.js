/**
 * @name QuoteonStartup
 * @author saulgoodman7277
 * @description Displays a random quote everytime you launch discord.
 * @version 0.0.2
 **/

module.exports = class QuoteOnStartup {
    quotes = {
        "Steve Jobs": [
            "The only way to do great work is to love what you do.",
            "Innovation distinguishes between a leader and a follower.",
        ],
        Confucius: [
            "It does not matter how slowly you go as long as you do not stop.",
        ],
        "Winston Churchill": [
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        ],
    };

    static random(range) {
        return Math.floor(Math.random() * range);
    }

    start() {
        this.displayQuote();
    }

    stop() {}

    getQuote(author = null) {
        if (author) {
            authorQuotes = this.quotes[author];
            return [author, authorQuotes[random(authorQuotes.length)]];
        }

        authors = Object.keys(this.quotes);
        author = authors[random(authors.length)];
        authorQuotes = this.quotes[randomAuthor];

        return [author, random(authorQuotes.length)];
    }

    displayQuote() {
        [author, quote] = this.getQuote();
        BdApi.alert(author, quote);
    }
};
