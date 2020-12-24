<template>
    <AdsSearch @on-search="search"/>
    <AdsList :filter="inputSearch"/>
</template>

<script lang="ts">
import AdsList from "./components/AdsList.vue";
import AdsSearch from "./components/AdsSearch.vue";

export default {
    name: 'App',
    components: {
        AdsList,
        AdsSearch
    },
    data() {
        return {
            inputSearch: null
        }
    },
    methods: {
        search(inputSearch: string) {
            console.log('inputSearch', inputSearch);
            this.inputSearch = inputSearch;
        }
    }
}
</script>
