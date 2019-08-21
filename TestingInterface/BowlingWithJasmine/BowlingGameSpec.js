describe("BowlingGame", function() {
    // create a new instance of "BowlingGame" for each test, in a "game" variable
    var game;
    beforeEach(function(){
        game = new BowlingGame();
    });

    function rollMany (n, pins) {
        for (var i = 0; i < n; i++) {
            game.roll(pins)
        }
    }

    // when the player knocks down 0 pins
    it("should handle a gutter game", function() {
        // 20 pins x 0 time shut down
        rollMany(20, 0);
        // expecting that the score = 0
        expect(game.score()).toEqual(0);
    });
    
    // when the player knocks down all pins in 1 row
    it("should properly calculate a strike", function () {
        // 20 pins x 1 time all shut down
        rollMany(20, 1);
        // expecting that the score = 0
        expect(game.score()).toEqual(20);
    });
    
    // when the player knocks down all pins in 2 rows
    it("should properly calculate a spare", function () {
        // 20 pins x 2 times all shut down
        rollMany(20, 0.5);
        // expecting that the score = 0
        expect(game.score()).toEqual(10);
    });

});
