function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data(){
        return {
          playerHealth: 100,
          monsterHealth: 100
        };
    },
    computed: {
      monsterBarStyles() {
          return {width: this.monsterHealth + '%'}
      },
      playerBarStyles() {
          return {width: this.playerHealth + '%'}
      }
    },
    methods: {
        attackMonster() {
            // damage should be between 5 to 12
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            // damage should be between 8 to 15
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
    }
});

app.mount('#game')