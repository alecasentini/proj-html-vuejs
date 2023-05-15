<script >
export default {
    name: "ProudComp",


}

</script>

<template>
    <div class="w-100 d-flex justify-content-center position-relative" id="proud">
        <div class="w-75 d-flex flex-column align-items-center ">
            <h2 class="py-5" style="font-size: 50px; font-weight: 300;">We are Proud</h2>
            <p class="w-50 text-center" style="font-size: 16px;">Certificates courses are instructed by highly educated and
                qualified instructor who
                hold
                doctoral and
                master's level degrees.
            </p>

            <div class="d-flex justify-content-center w-100" style="margin-top: 50px;">
                <div class="d-flex flex-column align-items-center numbers">
                    <p style="font-size: 70px; font-weight: 300;">2000</p>
                    <p class="text-uppercase" style="font-size: 20px; font-weight: 300;">students</p>
                </div>
                <div class="d-flex flex-column align-items-center numbers" style="border-left: 1px  solid
                 lightgray;">
                    <p style="font-size: 70px; font-weight: 300;">950</p>
                    <p class="text-uppercase" style="font-size: 20px; font-weight: 300;">courses</p>
                </div>
                <div class="d-flex flex-column align-items-center numbers" style="border-left: 1px  solid
                 lightgray; border-right:1px  solid
                 lightgray ;">
                    <p style="font-size: 70px; font-weight: 300;">1600</p>
                    <p class="text-uppercase" style="font-size: 20px; font-weight: 300;">hours video</p>
                </div>
                <div class="d-flex flex-column align-items-center numbers">
                    <p style="font-size: 70px; font-weight: 300;">150</p>
                    <p class="text-uppercase" style="font-size: 20px; font-weight: 300;">countries reached</p>
                </div>
            </div>

        </div>
        <img src="../../public/we_proud.png" alt="we_proud" class="position-absolute">


    </div>
</template>

<style lang="scss" scoped>
#proud {
    height: 750px;
    background-color: #f0f4fa;

    .numbers {
        width: calc(100% / 4);
    }

    img {
        bottom: 0;
        width: 100%;
    }
}
</style>