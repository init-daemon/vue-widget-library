<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: page == 1 }">
        <a class="page-link" href="#" @click.prevent="changePage(1)">1</a>
      </li>
      <li class="page-item" :class="{ disabled: page <= 1 }">
        <a class="page-link" href="#" @click.prevent="previousPage">Précédent</a>
      </li>
      <li class="page-item" v-if="page > 10">
        <a class="page-link" href="#" @click.prevent="changePage(page - 10)">&lt;&lt;</a>
      </li>
      <li class="page-item active " v-if="page != 1 && page != totalPages">
        <a class="page-link" href="#" @click.prevent="">{{ page }}</a>
      </li>
      <li class="page-item" v-if="page < totalPages - 10">
        <a class="page-link" href="#" @click.prevent="changePage(page + 10)">&gt;&gt;</a>
      </li>
      <li class="page-item" :class="{ disabled: page >= totalPages }">
        <a class="page-link" href="#" @click.prevent="nextPage">Suivant</a>
      </li>
      <li class="page-item" :class="{ disabled: page == totalPages }">
        <a class="page-link" href="#" @click.prevent="changePage(totalPages)">{{ totalPages }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    displayCount: {
      type: Number,
      default: 7,
    },
  },
  data() {
    let page = parseInt(this.$route.query.page);
    page = (!isNaN(page) && page > 0) ? page : 1;
    return {
      page,
    }
  },
  computed: {
  },
  methods: {
    changePage(page) {
      if (page != this.page && page <= this.totalPages) {
        this.page = page;
        this.$emit('update:currentPage', page);
        this.updateUrl({ page });
      }
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
        this.$emit('update:currentPage', this.page);
        this.updateUrl({ page: this.page });
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
        this.$emit('update:currentPage', this.page);
        this.updateUrl({ page: this.page });
      }
    },
    updateUrl(params) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      for (var param in params) {
        urlSearchParams.set(param, params[param]);
      }
      const urlParams = '?' + urlSearchParams.toString();
      const url = `${window.location.pathname}${urlParams}`;
      // naviguer vers l'URL GET
      this.$router.replace(url);
    },
  },
};
</script>

<style scoped>
.pagination {
  justify-content: center;
}
</style>
