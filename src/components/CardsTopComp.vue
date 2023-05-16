<script >

export default {
    name: "CardsTopComp",

}

</script>

<template>
    <!-- 3 cards top -->
    <div class="d-flex w-75 justify-content-between py-5">
        <div class="p-5 lb-card">
            <font-awesome-icon :icon="['fas', 'earth-africa']" style="font-size: 50px
            ; color: #195ec8;" />
            <h5 class="my-4">World Recognize</h5>
            <p>Our online course certificates can be used around the world and also in most popular universities and
                companies.</p>
        </div>
        <div class="p-5 lb-card">
            <font-awesome-icon :icon="['fas', 'display']" style="font-size: 50px
            ; color: #195ec8;" />
            <h5 class="my-4">Mostly Online Learning (sd)</h5>
            <p>Masterstudy online certificates can be obtained in a range of specialized areas and typically take about a
                year to complete.</p>
        </div>
        <div class="p-5 lb-card">
            <font-awesome-icon :icon="['far', 'calendar-check']" style="font-size: 50px
            ; color: #195ec8;" />
            <h5 class="my-4">Graduate in as little as 1 Year</h5>
            <p>Online post-graduate certificates are a popular way to develop your professional qualifications of
                Masterstudy</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.w-75 {
    margin: 0 auto;
}

.lb-card {
    background-color: #f2f6fb;
    width: calc(100% / 3 - 20px);
    height: 300px;

    p {
        color: #77777a;
    }

    &:hover {
        transform: translateY(-5px);
    }
}
</style>