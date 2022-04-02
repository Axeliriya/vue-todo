<template>
  <div class="app">
    <ul>
      <li class="post">
        <div class="post__name"><strong>Name: </strong>Post about JS</div>
        <div class="post__description">
          <strong>Description: </strong>For example
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.app {
  padding: 15px;
}

.post {
  background-color: gainsboro;
}

.post__name {
  padding: 24px 16px 16px 16px;
  border-radius: 15px 15px 0 0;
  background-color: #a5ddb8;
}

.post__description {
  padding: 12px 16px 16px 16px;
  border-radius: 0 0 15px 15px;
  background-color: #ffffff;
}
</style>
