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

.post__name {
  border-radius: 0 5px;
}

.post__description {
}
</style>
