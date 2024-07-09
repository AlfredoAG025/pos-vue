<script setup>
import Logo from './Logo.vue';
import Link from './Link.vue';

import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="px-10 py-5 bg-gray-700 flex justify-between absolute top-0 w-full z-10">
        <div>
            <Logo />
        </div>

        <nav>
            <Link to="admin">
            Administrar
            </Link>
        </nav>
    </header>
</template>
