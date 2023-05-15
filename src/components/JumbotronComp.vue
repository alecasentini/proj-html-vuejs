<script >
export default {
    name: "JumbotronComp"
}

</script>

<template>
    <div class="d-flex w-75 align-items-center my-5" id="jumbo">
        <div class="w-50">
            <h1 style="font-size: 65px;">Start Investing in You</h1>
            <h4 class="my-5">With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for
                you.</h4>
            <button type="button" class="btn">JOIN FOR FREE</button>
        </div>

        <div class="position-relative">
            <img src="../../public/base.png" alt="base" style="width: 600px;">
            <img src="../../public/book1.png" alt="book1" id="book-1" class="position-absolute">
            <img src="../../public/book2.png" alt="book2" id="book-2" class="position-absolute">
            <img src="../../public/bubblespeech.png" alt="bubblespeech" id="bubblespeech" class="position-absolute">
            <img src="../../public/magnifier.png" alt="magnifier" id="magnifier" class="position-absolute">
            <img src="../../public/moon.png" alt="moon" id="moon" class="position-absolute"
                style="filter: grayscale(100%);">
        </div>

    </div>
</template>

<style lang="scss" scoped>
#jumbo {
    margin: 0 auto;
}

#book-1 {
    top: 110px;
    right: 40px;
}

#book-2 {
    top: 275px;
    right: 155px;
}

#bubblespeech {
    top: 60px;
    right: 40px;
}

#magnifier {
    top: 325px;
    right: 70px;
}

#moon {
    top: 115px;
    left: 105px;
}


.btn {
    background-color: #195ec8;
    color: white;
    font-weight: bolder;
    border-radius: 25px;
    padding: 10px 30px;
}
</style>