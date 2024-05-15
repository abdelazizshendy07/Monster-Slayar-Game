const getRendomValue = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      mansterHealth: 100,
      playerHealth: 100,
    };
  },
  computed: {
    mansterBarStyle() {
      return { width: this.mansterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attackManster() {
      const attackValue = getRendomValue(12, 5);
      this.mansterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRendomValue(15, 9);
      this.playerHealth -= attackValue;
    },
  },
});
app.mount("#game");
