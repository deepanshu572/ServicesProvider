function toggleData() {
    var eye1 = document.getElementById("eye1");
    var password1 = document.getElementById("password");
    var password2 = document.getElementById("signupPassword");
    if (eye1) {
      if (eye1.classList.contains("bi-eye")) {
        eye1.classList.remove("bi-eye");
        eye1.classList.add("bi-eye-slash");
        password1.type = "password";
        
      } else {
        eye1.classList.remove("bi-eye-slash");
        eye1.classList.add("bi-eye");
        password1.type = "text";
      }
    }
   else if (eye2) {
        if (eye2.classList.contains("bi-eye")) {
          eye2.classList.remove("bi-eye");
          eye2.classList.add("bi-eye-slash");
          password2.type = "password";
          
        } else {
          eye2.classList.remove("bi-eye-slash");
          eye2.classList.add("bi-eye");
          password2.type = "text";
        }
      }
      
    
  }
  var loginBtn = document.getElementById("loginBtn");
      var email1 = "user";
      var password1 = "123";
      if (loginBtn) {
        loginBtn.addEventListener("click", function (e) {
          e.preventDefault();
          var email = $("#email").val();
          var password = $("#password").val();
        if(email === "" || password === ""){
            alert("Please Fill Up The Form ☹");
            return false;
        }
        if(email != email1 || password != password1){
            alert("Invalid Email or Password");
           return false; 
        }
        else{
            alert("Login Successful ��");
            window.location.href = "otp.html";
            return true;
        }
        });
      }




      // const emailDb = "test@gmail.com";
      const mobileDB = "7903737980";
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


      $("#SignupForm").submit(async function (e) {
        e.preventDefault();
        const formdata = new FormData(this);
        const name = formdata.get("name");
        const email = formdata.get("email");
        const mobile = formdata.get("mobile");
        const password = formdata.get("password");
        if ((name === "", email === "", mobile === "", password === "")) {
          // alert("All fields are required");
          return false;
        }
        if(mobile === mobileDB){
          alert("user already exists");
          return false;  
        }
        if(mobile.length !=10){
          alert("Please enter valid 10 digit mobile number");
          return false;
        }

          if(regex.test(email)) {
              console.log("Valid Email address");
          } else {
              console.log("Invalid Email address");
              return false;
          }

          alert("successfully registerd !");

          // reset form
          this.reset();

        
        // const response = await fetch("/api/signup", {
        //   method: "POST",
        //   body: formdata
        // });
        // const data = await response.json();
      });




      // otp page
      document.addEventListener("DOMContentLoaded", function () {
        const inputs = document.querySelectorAll(".otp-input");

        inputs.forEach((input, index) => {
          input.addEventListener("input", (e) => {
            if (e.target.value.length > 1) {
                e.target.value = e.target.value.slice(0, 1); // Keep only one digit
            }
            if (e.target.value && index < inputs.length - 1) {
              inputs[index + 1].focus(); // Move to the next input
            }
          });

          input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !input.value && index > 0) {
              inputs[index - 1].focus(); // Move to the previous input
            }
          });
        });

        // Mock OTP verification, replace with actual database call or API call
        const otpDb = 1234;

        document
          .getElementById("submitOtp")
          .addEventListener("click", function (e) {

            e.preventDefault();

            let otpCode = "";
            inputs.forEach((input) => {
              otpCode += input.value;
            });
            if (otpDb != otpCode) {
              alert("Invalid OTP");            
              return false;
            }

            if (otpCode.length != inputs.length) {
              return false;
            } else {
              alert("login succesfully !");
              window.location.href = "home.html";
            }
          });
      });
