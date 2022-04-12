<template>
  <section class="login-screen">
    <div class="container1">
        <div class="content">
            <div class="heading d-flex align-items-center">
                <img class="logo" src="susankya logo 1.jpg" alt="logo">
                <h1>Susankya Tech</h1>
            </div>
            
            <div class="enter">
                <h2  class="welcome">Welcome Sir,</h2>
                <p>Enter your email and password to sign in</p> 
            </div>
            <form>
                <div class="row">
                    <div class="col-25">
                        <label for="fname">E-mail</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="fname" v-model="formdata.username" name="firstname" placeholder="Your email address">
                        <div class="validation">
                        <span v-if="validation.username">{{validation.username}}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Password</label>
                    </div>
                    <div class="col-75">
                        <input type="password" v-model="formdata.password" id="pw" name="password" placeholder="">
                        <div v-if="validation.password">{{validation.password}} </div>
                    </div>
                    <div class="error-msg" v-if="this.validation.non_field_errors">{{this.validation.non_field_errors[0]}}</div>
                </div>
                
                <div class="row">
                    <div class="toggle d-flex">
                        <div class="switch">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="remember ps-3">
                            <a href="#" class="link">Remember Me</a>
                        </div>
                    </div>  
                </div>
                <div class="sign ms-3">
                    <div class="row">
                        <input type="submit" @click.prevent="login()" class="Signin" value="Sign In">
                    </div>
                </div>
                
            </form>
            
        </div>
    </div>

    <div class="container2 col-sm-3" >
        <img class="plain" src="MicrosoftTeams-image1">
        <img class="bubbles" src="MicrosoftTeams-image12">
    </div>
  </section>
</template>

<script>
export default {
    name: 'LoginScreen',
    data: ()=>({
        msg: 'This is Login Screen.',
        formdata: {},
        validation: {},
        resStore: {}
    }),
    methods: {
        login() {
            this.$store.dispatch('login', this.formdata).then(res => {
                this.resStore = res
            }).catch(err => {
                if(err.response.data) {
                    this.validation = {
                        ...err.response.data
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
section {
    width: 100%;
    height: 100vh;
    display: flex;
}

.container1 {
    width: 40%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container2 {
    width: 60%;
    height: 100vh;
}

/* .content {
    margin-top: 50px;

} */

/* Heading */
.logo {
    width: 80px;
    height: 80px;
}

.heading h1 {
    padding-left: 20px;
    font-weight: bold;
    font-size: 28px;
    line-height: 42px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #000000;
}

/* Greetings anmd information */
.enter{
    width: 100%;
    margin-top: 10%;
}
.welcome {
    padding: 05px 0px;
    font-weight: bold;
    font-size: 32px;
    color: #7CB342;    
}

.enter p {
    font-size: 16px;
    color: #A0AEC0;
}

/* Form */
form .row{
    padding: 10px 0px;
}

form label {
    color: #5E5873;
}

input[type=text]{
    width: 447px;
    height: 48px;
    background: #FFFFFF;
    border: 0.75px solid #7CB342;
    box-shadow: 0px 12px 25px rgba(114, 114, 114, 0.05);
    border-radius: 8px;
    outline: none;
}

form input::placeholder {
    padding: 10px;
}

input[type=password] {
    width: 447px;
    height: 48px;
    background: #FFFFFF;
    border: 0.75px  solid #7CB342;
    box-shadow: 0px 12px 25px rgba(114, 114, 114, 0.05);
    border-radius: 8px;
    outline: none;
}
input[type=password]::placeholder{
    padding: 10px;
}

/* Toggle Switch */
.switch {
    position: relative;
    display: flex;
    width: 36px;
    height: 18px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 0px;
    bottom:0px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background: linear-gradient(270.25deg, #5F6C37 -1.9%, #7CB342 99.74%);
    border-radius: 97.7397px;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

/* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
/* Remember Me */
.remember {
    font-size: 12px;
    line-height: 18px;
}
.remember a{
    color: #2D3748;
    text-decoration: none;
}
/* Sign In button */
.sign {
    width: 350px;
    height: 55px;
    margin-top: 07px;
}

input[type=submit]{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 30px;
    padding: 10px 10px;
    background: linear-gradient(270.25deg, #5F6C37 -1.9%, #7CB342 99.74%);
    box-shadow: 0px 10px 30px rgba(11, 85, 19, 0.15);
    border-radius: 15px;

}
input[type=submit]:hover{
    background: #82b34f;    ;
}
/* Right side Images */
.container2 img{
    width: 930px;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    right: 0;
}
.plain {
  z-index: 1;
}

.bubbles {
    z-index: 10;
}

.error-msg {
    margin-top: 05px;
    padding: 10px;
    color: red;
}
</style>
<style>
    .validation{
        padding:10px;
        color: red;
    }
</style>