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
                        <label for="email">Email</label>
                    </div>
                    <div class="input">
                        <input class="input-text" type="text" name="username" id="username" placeholder="Enter your email">
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
                <div class="refo">
                    <div class="remember-me">
                        <input type="checkbox" name="" id="">
                        <label for="">Remember me</label>
                    </div>
                    <div class="forgot-pw">
                        <label> <a href="">Forgot password</a></label>
                    </div>
                </div>
                <div class="sign-in">
                    <button>Sign in</button>
                </div>
                <div class="sign-up">
                    <h2>Don't have an account?</h2>
                    <a href="">Sign up to free!</a>
                </div>
            </div>

        </div>
        <div class="image">
            <img src="../../assets/images/banner-login.png" alt="">
        </div>
    </main>
</template>
<style scoped>
@import url(login.scss);
</style>