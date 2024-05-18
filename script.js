const getRendomValue = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      mansterHealth: 100,
      playerHealth: 100,
      current: 0,
      winner: null,
      LogMassages: [],
    };
  },
  computed: {
    mansterBarStyle() {
      if (this.mansterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.mansterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    useSpecialAttack() {
      return this.current % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.mansterHealth <= 0) {
        // A draw
        this.winner = "draw";
      } else if (value < 0) {
        // player lost
        this.winner = "manster";
      }
    },
    mansterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // a draw
        this.winner = "draw";
      } else if (value < 0) {
        // mamnster lost
        this.winner = "player";
      }
    },
  },
  methods: {
    startNewGame() {
      this.mansterHealth = 100;
      this.playerHealth = 100;
      this.winner = null;
      this.current = 0;
      this.LogMassages = [];
    },
    attackManster() {
      this.current++;
      const attackValue = getRendomValue(12, 5);
      this.mansterHealth -= attackValue;
      this.addLogMassage("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRendomValue(15, 8);
      this.playerHealth -= attackValue;
      this.addLogMassage("manster", "attack", attackValue);
    },
    specialAttack() {
      this.current++;
      const attackValue = getRendomValue(25, 10);
      this.mansterHealth -= attackValue;
      this.addLogMassage("player", "spical-attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.current++;
      const healValue = getRendomValue(20, 8);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMassage("player", "heal", healValue);
    },
    surrender() {
      this.winner = "manster";
    },
    addLogMassage(who, what, value) {
      this.LogMassages.unshift({
        actionby: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});
app.mount("#game");
