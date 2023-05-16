<script >
export default {
    name: "TestimonialComp",


}

</script>

<template>
    <div class="w-100 d-flex align-items-center">
        <div class="w-75 ">
            <!-- Testimonial: balloon con bg-image -->
            <div class="balloon">
                <h3 style="font-size: 35px;">Come as you are</h3>
                <p style="font-weight: 300; font-size: 18px; line-height: 30px;" class="py-4">MasterStudy used is an
                    excellent workshop
                    wheter you come as a
                    counselour, advisor, administrator, or
                    faculty
                    member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the
                    MasterStudy National Conferece next year and facilitating the use of this excellent retention/student
                    success course at my college. </p>
                <p class="fw-bolder m-0">Tim Sab</p>
                <p>General Devevoper, Stylemix Themes</p>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.w-100 {
    background-image: url(../../public/brooke-cagle-224821-unsplash-1-1920x700.jpg);
    height: 700px;

    .w-75 {
        margin: 0 auto;

        .balloon {
            position: relative;
            background-color: white;
            padding: 70px;
            width: 50%;
        }

        .balloon:after {
            content: "";
            position: absolute;
            top: 50%;
            right: -25px;
            transform: translateY(-50%);
            border-style: solid;
            border-width: 20px 0 20px 25px;
            border-color: transparent transparent transparent white;
        }
    }
}
</style>