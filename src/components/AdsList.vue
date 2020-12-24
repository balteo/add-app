<template>
    <ul>
        <li v-for="ad in ads">
            {{ ad.title }},
            {{ ad.description }}
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    name: "AdsList",
    data() {
        return {
            ads: []
        }
    },
    props: ['filter'],
    watch: {
        async filter(newSearchInput: string, oldSearchInput: string) {
            console.log('watch:newSearchInput: ', newSearchInput);
            console.log('watch:oldSearchInput: ', oldSearchInput);
            const response = await fetch('/api/ads?q=' + newSearchInput);
            this.ads = await response.json();
        }
    },
    async created() {
        const response = await fetch('/api/ads');
        this.ads = await response.json();
    }
}
</script>
