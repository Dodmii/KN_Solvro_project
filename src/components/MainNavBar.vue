<template>
  <div>
    <div class="container-fluid">
      <nav
        class="navbar navbar-expand-sm navbar-light bg-light shadow p-3 mb-5 bg-body"
      >
        <div class="container-fluid">
          <a
            class="align-middle"
            :class="{
              'left-mark': locationName === 'main.page',
            }"
            style="margin-right: 5px; height: 2.2rem"
          ></a>
          <img
            :src="IconImage"
            alt="My Image"
            class="icon-image"
            style="margin-right: 0.5rem"
          />
          <a
            :href="'#'"
            class="navbar-brand"
            @click="goToMainPage"
            style="text-align: left"
          >
            KN Solvro cocktails manager
          </a>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="align-middle"
                  :class="{
                    'left-mark': locationName === 'jobs',
                  }"
                ></a>
                <a :href="'#'" class="nav-link" @click="goToCocktailsLists"> Lista </a>
              </li>
              <li class="nav-item">
                <a
                  class="align-middle"
                  :class="{
                    'left-mark': locationName === 'companies',
                  }"
                >
                </a>
                <a :href="'#'" class="nav-link" @click="goToFavorite">
                  Ulubione
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="align-middle"
                  :class="{
                    'left-mark': locationName === 'documents',
                  }"
                >
                </a>
                <a :href="'#'" class="nav-link" @click="goToDocuments">
                  Dokumenty
                </a>
              </li>
              <li>
                <a
                  class="align-middle"
                  :class="{
                    'left-mark': locationName === 'payments',
                  }"
                >
                </a>
                <a :href="'#'" class="nav-link" @click="goToPayment">
                  Płatności
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Icon from "@/assets/logo.png";

export default {
  props: {
    locationNameProp: String,
  },

  data() {
    return {
      locationName: this.locationNameProp,
      IconImage: Icon,
    };
  },

  methods: {
    goToMainPage() {
      this.$router.push({ name: "main.page" });
    },
    goToFavorite() {
      this.$router.push({ name: "jobs" });
    },
    goToCocktailsLists() {
      this.$router.push({ name: "companies" });
    },
  },
};
</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(0, 0, 0);
  display: inline-block;
}
.container-fluid {
  width: 100%;
  padding-right: 0;
  padding-left: 0;
}
.left-mark {
  border-left-style: solid;
  border-left-width: 7px;
  border-left-color: rgb(68, 68, 68);
  height: 1.8rem;
}
.icon-image {
  width: 2rem;
  height: auto;
}
</style>
