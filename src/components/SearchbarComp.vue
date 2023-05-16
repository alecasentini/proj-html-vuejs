<script >
import { store } from '../store';
export default {
    name: "SearchbarComp",
    data() {
        return {
            store,
            searchQuery: '',

        }
    },
    computed: {
        filteredCourses() {
            if (!this.searchQuery) return [];
            return this.store.courses.filter(course =>
                course.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                course.category.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    }


}

</script>

<template>
    <!-- Searchbar -->
    <div class="position-relative">

        <!-- input text -->
        <div class="input-group ms-2">
            <input type="text" class="form-control py-3" placeholder="Search courses" aria-describedby="basic-addon1"
                v-model="searchQuery">
            <span class="input-group-text text-white px-4"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></span>
        </div>

        <!-- lista dinamica -->
        <ul v-if="filteredCourses.length > 0">
            <li v-for="(course, index) in filteredCourses" :key="index">
                <img :src="course.img" alt="" style="width: 50px;">
                <span class="fw-bolder px-1" style="font-size: 16px;">{{ course.name }} </span>
                <span style="font-size: 14px; color: #77777a;">({{ course.subcategory }})</span>
            </li>
        </ul>
    </div>
</template>
  

<style lang="scss" scoped>
.input-group {
    width: 500px;

    .form-control {
        background-color: #f0f2f5;
        color: #77777a;
        border-radius: 0;
        border: 0;
    }

    .input-group-text {
        border-radius: 0;
        border: 0;
        background-color: #195ec8;

        &:hover {
            cursor: pointer;
        }
    }
}

ul {
    position: absolute;
    z-index: 1;
    box-shadow: 0px 8px 8px 1px gray;
    padding: 0;
    right: 0;

    li {
        list-style-type: none;
        width: 500px;
        background-color: white;
        border-bottom: 1px solid lightgray;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 5px;

        &:hover {
            cursor: pointer;
            background-color: #f2f6fb;
        }
    }
}
</style>