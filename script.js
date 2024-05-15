const app = Vue.createApp({
  data() {
    return {
      mansterHealth: 100,
      playerHealth: 100,
    };
  },
  methods: {
    attackManster() {
      const attackValue = Math.floor(Math.random() * (12 - 5) + 5);
      this.mansterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = Math.floor(Math.random() * (18 - 8) + 5);
      this.playerHealth -= attackValue;
    },
  },
});
app.mount("#game");
