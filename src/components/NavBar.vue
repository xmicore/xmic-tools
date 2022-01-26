<script setup>
import '../assets/variables.css'
</script>

<template>
    <nav>
        <router-link class="nav-brand" to="/">XMIC Tools</router-link>
        <ul class="nav" >
            <router-link class="nav-item" to="/jenkins">Jenkins</router-link>
        </ul>
    </nav>
</template>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background: var(--color-primary);
        
    }

    .nav-brand {
        font-size: 3rem;
        font-family: var(--font-family-secondary);
        text-decoration: none;
        color: black;
    }

    .nav {
        display: flex;
        gap: 1rem;
        list-style: none;
    }

    .nav-item {
         color: black;
         text-decoration: none;
    }
</style>