<script >
export default {
    name: "ProudComp",
    data() {
        return {
            students: 0,
            courses: 0,
            hours: 0,
            countries: 0,
            observer: null
        }
    },
    mounted() {
        this.observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this.animateValue("students", 2000, 2000);
                this.animateValue("courses", 950, 2000);
                this.animateValue("hours", 1600, 2000);
                this.animateValue("countries", 150, 2000);
            } else {
                this.students = 0;
                this.courses = 0;
                this.hours = 0;
                this.countries = 0;
            }
        });
        this.observer.observe(this.$el);
    },
    beforeDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        animateValue(property, endValue, duration) {
            let start = Date.now();
            let timer = setInterval(() => {
                let timePassed = Date.now() - start;
                let progress = timePassed / duration;
                let currentValue = Math.round(endValue * progress);
                if (progress >= 1) {
                    clearInterval(timer);
                    currentValue = endValue;
                }
                this[property] = currentValue;
            }, 10);
        }
    }
}



</script>

<template>
    <div class="w-100 d-flex justify-content-center position-relative" id="proud">
        <div class="w-75 d-flex flex-column align-items-center ">
            <!-- title -->
            <h2 class="py-5" style="font-size: 50px; font-weight: 300;">We are Proud</h2>
            <p class="w-50 text-center" style="font-size: 16px;">Certificates courses are instructed by highly educated and
                qualified instructor who
                hold
                doctoral and
                master's level degrees.
            </p>

            <!-- numeri contatori con animazione -->
            <div class="d-flex justify-content-center w-100" style="margin-top: 50px;">
                <div class="d-flex flex-column align-items-center numbers">
                    <p style="font-size: 70px; font-weight: 300;">{{ students }}</p>
                    <p class="text-uppercase" style="font-size: 20px; font-weight: 300;">students</p>
                </div>
                <div class="d-flex flex-column align-items-center numbers" style="border-left: 1px  solid
                 lightgray;">
                    <p style="font-size: 70px; font-weight: 300;">{{ courses }}</p>
                    <p class="text-uppercase" style="font-size: 20px; font-weight: 300;">courses</p>
                </div>
                <div class="d-flex flex-column align-items-center numbers" style="border-left: 1px  solid
                 lightgray; border-right:1px  solid
                 lightgray ;">
                    <p style="font-size: 70px; font-weight: 300;">{{ hours }}</p>
                    <p class="text-uppercase" style="font-size: 20px; font-weight: 300;">hours video</p>
                </div>
                <div class="d-flex flex-column align-items-center numbers">
                    <p style="font-size: 70px; font-weight: 300;">{{ countries }}</p>
                    <p class="text-uppercase" style="font-size: 20px; font-weight: 300;">countries reached</p>
                </div>
            </div>

        </div>

        <!-- immagine -->
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