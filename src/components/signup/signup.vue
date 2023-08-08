<script>
</script>
<template>
    <main>
        <div class="login">
            <div class="login-form">
                <div class="text">
                    <div class="welcome">WELCOME TO ZONE</div>
                    <div class="back">Welcome back! Please enter your details.</div>
                </div>
                <div class="logo">
                    <img src="../../assets/images/Logo.png" alt="">
                </div>
                <div class="username">
                    <div class="label">
                        <label for="username">Username</label>
                    </div>
                    <div class="input">
                        <input class="input-text" type="text" name="username" id="username"
                            placeholder="Enter your username">
                    </div>
                </div>
                <div class="username">
                    <div class="label">
                        <label for="email">Email</label>
                    </div>
                    <div class="input">
                        <input class="input-text" type="text" name="email" id="email" placeholder="Enter your email">
                    </div>
                </div>
                <div class="password">
                    <div class="label">
                        <label for="">Password</label>
                    </div>
                    <div class="input">
                        <input class="input-text" type="password" name="password" id="password" placeholder="**********">
                    </div>
                </div>
                <div class="name">
                    <div class="label">
                        <label for="">Name</label>
                    </div>
                    <div class="input">
                        <input class="input-text" type="text" name="name" id="name" placeholder="Name">
                    </div>
                </div>
                <div class="phone">
                    <div class="label">
                        <label for="">Phone</label>
                    </div>
                    <div class="input">
                        <input class="input-text" type="text" name="phone" id="phone" placeholder="Phone">
                    </div>
                </div>
                <div class="address">
                    <div class="label">
                        <label for="">Name</label>
                    </div>
                    <div class="input">
                        <input class="input-text" type="text" name="address" id="address" placeholder="Address">
                    </div>
                </div>
                <div class="sign-in">
                    <button>Sign up</button>
                </div>
                <div class="sign-up">
                    <h2>Don't have an account?</h2>
                    <a href="">Login!</a>
                </div>
            </div>

        </div>
        <div class="image">
            <img src="../../assets/images/banner-login.png" alt="">
        </div>
    </main>
</template>
<style scoped>
@import url(../login/login.scss);
</style>