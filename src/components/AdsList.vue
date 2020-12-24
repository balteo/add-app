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
    async created() {
        const response = await fetch('/api/ads');
        const data = await response.json();
        this.ads = data;
    }
}
</script>
