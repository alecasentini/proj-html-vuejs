<script >
export default {
    name: "FooterComp",


}

</script>

<template>
    <div class="w-75 d-flex">

        <div class="w-25" id="about">
            <h5>About</h5>
            <p><a href="#">Masterstudy</a> is Education WordPress theme featured by Learning Management System (LMS) for
                education.<br>Developed by <a href="#">StylemixThemes</a>.</p>
            <ul>
                <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
                <li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
                <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
            </ul>
        </div>

        <div class="w-25" id="contact">
            <h5>Contact</h5>
            <p>Usa, California 20, First Avenue,<br>California</p>
            <p>Tel.: +1 212 458 300 32 <br>Fax: +1 212 375 24 14</p>
            <a href="#">info@masterstudy.com</a>
        </div>

        <div class="w-25" id="pages">
            <h5>Pages</h5>
            <div class="d-flex">
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shortcodes</a></li>
                </ul>
                <ul>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Membership A...</a></li>
                    <li><a href="#">Typography</a></li>
                </ul>

            </div>
        </div>

        <div class="w-25" id="blog">
            <h5>Blog</h5>
            <div class="d-flex p-3 article">
                <img src="../../public/photo-1517520287167-4bbf64a00d66-150x150.jpeg" alt="blog_1">
                <div class="p-2">
                    <p><a href="#">Our main target is to "Developing Yourself as a Leader"</a></p>
                    <p>— August 9, 2018</p>
                </div>
            </div>
            <div class="d-flex p-3 article">
                <img src="../../public/photo-1490376840453-5f616fbebe5b-150x150.jpeg" alt="blog_2">
                <div class="p-2">
                    <p><a href="#">Those Other College Expenses You Aren`t Thinking About</a></p>
                    <p>— June 3, 2015</p>
                </div>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.w-75 {
    margin: 0 auto;
    padding: 40px 0;

    .w-25 {
        padding: 0px 10px;
    }

    h5 {
        font-weight: bolder;
        padding: 10px 0;
    }

    #about {
        p {
            font-size: 13px;

            a {
                text-decoration: none;
            }
        }


        ul {
            display: flex;
            padding: 0;

            li {
                list-style-type: none;

                a {
                    color: #aaaaaa;

                    svg {
                        font-size: 20px;
                        margin-right: 20px;
                    }
                }
            }
        }
    }

    #contact {
        p {
            font-size: 13px;
        }

        a {
            text-decoration: none;
            color: #aaaaaa;
            font-size: 13px;
        }
    }

    #pages {
        ul {
            padding: 0 20px;

            li {


                a {
                    text-decoration: none;
                    color: black;
                    font-weight: 300;
                    line-height: 40px;
                    font-size: 15px;
                }
            }
        }
    }

    #blog {
        .article {
            height: 130px;

            img {

                height: 100%;
            }

            p {
                color: lightgray;
                font-size: 15px;
                margin-bottom: 5px;
            }

            a {
                color: #aaaaaa;
                text-decoration: none;
                font-weight: bold;
                font-size: 15px;
            }
        }
    }
}
</style>