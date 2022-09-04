function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data(){
        return {
          playerHealth: 100,
          monsterHealth: 100,
          currentRound: 0,
        };
    },
    computed: {
      monsterBarStyles() {
          return {width: this.monsterHealth + '%'}
      },
      playerBarStyles() {
          return {width: this.playerHealth + '%'}
      },
      mayUseSpecialAttack() {
          return this.currentRound % 3 !== 0;
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
            this.currentRound++;
        },
        specialAttackMonster() {
            // damage should be between 10 to 25
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            // heal should be between 8 to 15
            const healValue = getRandomValue(8, 20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
    }
});

app.mount('#game')