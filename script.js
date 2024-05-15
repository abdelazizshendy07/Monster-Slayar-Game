const getRendomValue = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      mansterHealth: 100,
      playerHealth: 100,
      current: 0,
    };
  },
  computed: {
    mansterBarStyle() {
      return { width: this.mansterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    useSpecialAttack() {
      return this.current % 3 !== 0;
    },
  },
  methods: {
    attackManster() {
      this.current++;
      const attackValue = getRendomValue(12, 5);
      this.mansterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRendomValue(15, 9);
      this.playerHealth -= attackValue;
    },
    specialAttack() {
      this.current++;
      const attackValue = getRendomValue(25, 10);
      this.mansterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.current++;
      const attackValue = getRendomValue(11, 4);
      if (this.playerHealth + attackValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += attackValue;
      }
      this.attackPlayer();
    },
  },
});
app.mount("#game");
