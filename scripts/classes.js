function Sonic(l, m) {
    this.life = l;
    this.money = m;
    this.name = "Sonic";
    this.changeName = function(nme) {
        this.name = nme;
    };
    this.Replenish = function() {
        this.life = this.life + 1;
    };

    this.Buy = function() {
        this.money = this.money - 50;

    };
    this.Revive = function() {
        this.money = this.money - 100;
        this.life = this.life + 1000;
    };
    this.Dieing = function() {
        this.life = this.life - 1;
    };
    this.MoneyPlus = function() {
        this.money = this.money + 10;
    };
}