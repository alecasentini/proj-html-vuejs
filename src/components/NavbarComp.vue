<script >
export default {
    name: "NavBarComp"
}

</script>

<template>
    <div class="d-flex justify-content-between align-items-baseline p-4">
        <div>
            <!-- selezione lingua -->
            <select class="form-select" aria-label="Default select example">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
            </select>
        </div>

        <div class="d-flex">
            <!-- navbar -->
            <ul id="nav">
                <li> <a href="#">Courses</a> </li>
                <li class="position-relative"> <a href="#">Zoom</a>
                    <label class="position-absolute text-white">NEW</label>
                </li>
                <li> <a href="#">Pages</a> </li>
                <li> <a href="#">Bundles</a> </li>
                <li> <a href="#">Course Formats</a> </li>
                <li class="position-relative"> <a href="#">Add Course</a>
                    <label class="position-absolute text-white">NEW</label>
                </li>
                <li> <a href="#">Demos</a> </li>
            </ul>

            <!-- social icons -->
            <ul id="social">
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'behance']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fa', 'basketball']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'flickr']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'git']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a> </li>
                <li> <a href="#"><font-awesome-icon :icon="['fab', 'pinterest']" /></a> </li>

            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
select {
    border: 0;
    font-size: 14px;
}

ul {
    display: flex;

    li {
        list-style-type: none;

        a {
            text-decoration: none;
            color: #77777a;
        }

        label {
            border-radius: 5px 5px 5px 0;
            background-color: #dc1245;
            padding: 0 2px;
            top: -100%;
            right: 0;
            font-size: 12px;

        }
    }
}

#nav {
    font-size: 14px;

    li {
        padding: 0 15px;
    }
}

#social {
    font-size: 16px;

    li {
        padding: 0 5px;
    }
}
</style>