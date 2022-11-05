<template>
  <nav class="navbar">
    <ul>
      <li class="navItem">
        <router-link to="/profile/add"> Add Client </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style>
.navbar {
  background: rgb(73, 73, 73);
  margin-bottom: -60px;
  height: 60px;
  display: flex;
  padding: 0 20px 0 20px;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.navbar ul {
  list-style-type: none;
}
.navItem {
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(1, 48, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(1, 48, 255, 0.3);
}
.navItem:hover {
  background: rgba(1, 48, 255, 0.7);
}
.navItem a {
  color: white;
  text-decoration: none;
  padding: 0 20px 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
