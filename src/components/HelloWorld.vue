<template>
  <div class="hello">
    <p>This is a non testing p</p>
    <p data-testid="result-p">{{ counter }}</p>
    <button @click="increment(2)">Increment</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment(n) {
      this.counter += n;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
