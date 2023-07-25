<template>
  <div id="app">
    <div class="loading-ball">
      <div class="ball"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      ballUp: false,
    };
  },
  mounted() {
    this.animateBall();
      setTimeout(() => {
        this.$router.push({ path: '/products' });
      }, 5000);
  },
  methods: {
    animateBall() {
      this.ballUp = !this.ballUp; 
      setTimeout(() => {
        this.animateBall();
      }, 1000);
    },
  },
};
</script>


<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-ball {
  position: absolute;
  top: 50%;
  width: 100px;
  height: 100px;
  animation: loading-ball 1s infinite cubic-bezier(0.42, 0, 0.58, 1);
}

.ball {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #7700ff;
  transform: translate(-50%, -50%);
  opacity: 0.7;
}

@keyframes loading-ball {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}
</style>