<script setup>
import { ref, computed } from 'vue';
import JenkinsJob from './JenkinsJob.vue';
import FilterItem from './FilterItem.vue';

const jobs = ref([]);
const errorMsg = ref('');
const hostname = ref('');
const username = ref('');
const apiToken = ref('');
const filter = ref('');
const filterItems = ref([]);
const filteredJobs = computed(() => filterJobs());

function loadJobs() {
    const authorizationBase64 = btoa(`${username.value}:${apiToken.value}`)
    fetch(`/api/greeting`, {
        method: 'get',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then(errorMsg.value = '')
    .then(response => response.json())
    .then(data => JSON.stringify(data))
    .then(data => JSON.parse(data))
    .then(data => data.jobs)
    .then(data => jobs.value = data)
    .catch(error => errorMsg.value = error);
}

function filterJobs() {
    return filterItems.value.length > 0
            ? jobs.value.filter(job => 
                filterItems.value.filter(item => 
                    job.name.includes(item)).length > 0)
            : jobs.value
}

function addFilterItem() {
    // TODO load jobs if not yet loaded 
    if (filter.value && !filterItems.value.includes(filter.value)) {
        filterItems.value.push(filter.value);
        filter.value = '';
    }
}

function removeFilterItem(index) {
    console.log(index)
    filterItems.value.splice(index, 1);
}
</script>

<template>
<div class="container">
    <h1>Jenkins</h1>

    <div v-if="errorMsg" class="error">{{ errorMsg }}</div>

    <form>
        <div class="field">
            <label >Hostname: </label>
            <input type="text" v-model="hostname">
        </div>
        <div class="field">
            <label >Nutzername: </label>
            <input type="text" v-model="username"/>
        </div>
        <div class="field">
            <label >API-Token: </label>
            <input type="password" v-model="apiToken"/>
        </div>
        <div class="field">
            <label >Filter: </label>
            <input type="text" v-model="filter"/>
            <button @click.prevent="addFilterItem()">Hinzufügen</button>
        </div>
        <div class="filter">
            <FilterItem v-for="(item, index) in filterItems" :text="item" :index="index" @remove="removeFilterItem"></FilterItem>
        </div>
        <button class="load-btn" @click.prevent="loadJobs()">Jobs laden</button>
    </form>
    
    <div class="jobs">
        <JenkinsJob v-for="job in filteredJobs" :job="job"></JenkinsJob>
    </div>
</div>
</template>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .error {
        background-color: red;
        border-radius: 5px;
        outline: 3px solid #000;
        padding: 1rem;
        margin-bottom: 1rem;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .field {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: stretch;

    }
    .field > label {
        display: inline-block;
        width: 10rem;
    }
    .field > input {
        display: inline-block;
        flex-grow: 1;
    }
    .filter {
        display: flex;
        gap: 0.5rem;
        margin-left: 11rem;
    }
    .load-btn {
        margin-left: 11rem;
    }
    .jobs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>