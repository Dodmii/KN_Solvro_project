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
            Horizon Transport Solutions
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
                <a :href="'#'" class="nav-link" @click="goToJobs"> Zlecenia </a>
              </li>
              <li class="nav-item">
                <a
                  class="align-middle"
                  :class="{
                    'left-mark': locationName === 'companies',
                  }"
                >
                </a>
                <a :href="'#'" class="nav-link" @click="goToCompanies">
                  Firmy
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
          <div style="margin-right: 0.5rem">
            {{ user_name }}
            <a class="ms-3" href="#" @click="goToLogOut">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-power"
                viewBox="0 0 16 18"
              >
                <path d="M7.5 1v7h1V1z" />
                <path
                  d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import KeycloakService from "../security/KeycloakService";
import Icon from "@/assets/icon.png";

export default {
  props: {
    locationNameProp: String,
  },

  data() {
    return {
      locationName: this.locationNameProp,
      user_name: KeycloakService.GetUserFullName(),
      IconImage: Icon,
    };
  },

  methods: {
    goToMainPage() {
      this.$router.push({ name: "main.page" });
    },
    goToJobs() {
      this.$router.push({ name: "jobs" });
    },
    goToCompanies() {
      this.$router.push({ name: "companies" });
    },
    goToDocuments() {
      this.$router.push({ name: "documents" });
    },
    goToPayment() {
      this.$router.push({ name: "payments" });
    },
    goToLogOut() {
      KeycloakService.CallLogOut();
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
