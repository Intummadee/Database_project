 
 

<template>
  <section>
    <nav class="navbar navbar-light bg-white fixed-top ">
        <div class="container-fluid ">
            <a class="navbar-brand">
                <img src="https://cdn.discordapp.com/attachments/1017787574250647614/1094654856830128280/Kmitl.png"
                    alt="" width="120" height="60">
            </a>
            
        </div>
    </nav>
    <div class="container-fluid bg-white rounded" style="width: 30%; margin-top: 100px;">
        <div>
            <div class="row align-items-center">
                <div class="mx-auto">
                    <!-- Form -->
                    <form action="" method="post" style="font-family: 'Sarabun', sans-serif;">
                        <div class="rounded-top fs-3 ps-3"
                            style="background-color: #C74A1A; color: white; margin: 0px -12px 0px; padding: 20px 0 20px;">
                            KMITL Registration System
                        </div>
                        <!-- Input fields -->
                        <div class="form-group pt-3 ">
                            <label for="email">E-mail (@kmitl.ac.th):</label>
                            <input type="text" id="email" placeholder="" name="email" />
                        </div>
                        <div class="form-group mt-4">
                            <label for="password">Password:</label>
                            <input type="password" id="password" placeholder="" name="password" />
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary mt-4 text-center">
                                Login
                            </button>
                        </div>
                    </form>
                    <!-- Form end -->
                </div>
            </div>
        </div>
    </div>
  </section>
</template>


<script>
import axios from "axios";
export default {
    data() {
      return {
        blogs: null // add blogs variable
      }
    }
  }
</script>

<style scoped>
body{
    background-color: whitesmoke !important;
}


h3{
    background-color: #C74A1A;
    font-family: 'Sarabun', sans-serif;
    margin: -10;
}


input[type=text] {
  width: 100%;
  padding: 8px 10px;
 
  box-sizing: border-box;
  border: none;
  transition: 0.5s;
  outline: none;
  border-bottom: solid 1px black;
}

input[type=text]:focus {
  border: none;
  border-bottom: solid 1px red;
}

input[type=password] {
  width: 100%;
  padding: 8px 10px;
 
  box-sizing: border-box;
  border: none;
  transition: 0.5s;
  outline: none;
  border-bottom: solid 1px black;
}

input[type=password]:focus {
  border: none;
  border-bottom: solid 1px red;
}





</style>