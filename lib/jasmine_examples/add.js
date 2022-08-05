function Season() {
        this.season = 'Spring';
        this.nextSeason = function () {
                this.season = 'Summer';
                return this.season;
        },
                this.getNextSeason = function () {
                        return this.nextSeason();
                }
};

module.exports = Season