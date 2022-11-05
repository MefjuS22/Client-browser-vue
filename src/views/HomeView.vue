<script setup></script>

<template>
  <main class="container">
    <div class="content">
      <h1>Pick who you'd like to edit</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore
        dolorem, at necessitatibus, id quibusdam hic excepturi eum temporibus
        corporis ea incidunt omnis maxime ipsum ducimus, dolore veniam
        architecto. Accusamus, animi? Minima earum corrupti dolore dolores rerum
        consequatur perferendis delectus, magnam enim quam sunt vel? Nemo sunt
        adipisci corrupti veniam.
      </p>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  max-width: 1200px;
  min-height: 600px;
  padding: 10px;
  margin: 10px;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.37);
}
</style>
