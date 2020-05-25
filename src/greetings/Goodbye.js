const Greeting = require(`${__dirname}/Base`);

module.exports = class Goodbye extends Greeting {
    constructor(){
        super();
        this.textTitle = "RANK";
        this.textMessage = "Bu Sunucudaki Rankın: {server}";
        this.colorTitle = "#df0909";
    }
};
