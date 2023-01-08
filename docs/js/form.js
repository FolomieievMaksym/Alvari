if (document.getElementById("form")) {
   let form = document.getElementById("form");
   form.addEventListener("submit", sendForm);
   async function sendForm(e) {
      e.preventDefault();
      let error = formValidate(form);
      let formData = new FormData(form);
      if (error === 0) {
         let response = await fetch("./mail.php", {
            method: "POST",
            body: formData,
         });
         if (response.ok) {
            document.querySelector(".pop-up-sucess").classList.add("active");
            setTimeout(() => {
               document.querySelector(".pop-up-sucess").classList.remove("active");
            }, 2000);
            form.reset();
            setCountryCode();
         } else {
            alert("Something went wrong");
         }
      } else {
         alert("Write correct data");
      }
   }
   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll("#form [required]");
      for (let i = 0; i < formReq.length; i++) {
         const input = formReq[i];
         formRemoveError(input);
         if (input.name == "phone") {
            if (phoneReg(input)) {
               formAddError(input);
               console.log(phoneReg(input));
               // alert("phone error");
               error++;
            }
         } else if (input.name == "email") {
            // if (emailReg(input)) {
            //    formAddError(input);
            //    // alert("email error");
            //    error++;
            // }
         }
      }
      return error;
   }
   function formAddError(input) {
      input.classList.add("_error");
      input.classList.add("_error");
   }
   function formRemoveError(input) {
      input.classList.remove("_error");
      input.classList.remove("_error");
   }

   function phoneReg(input) {
      // return /[^\+\d\-\_\(\)]/.test(input.value);
      return !/\+\d{1,4}[\d\-\_\(\)]/.test(input.value);
   }
   function emailReg(input) {
      // return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
      return /[^\w\-\_]\@[^\w\-\_]\.([^\w])|([^\w]\.[^\w])/.test(input.value);
   }
   var input = document.querySelector("#phone");
   window.intlTelInput(input, {
      // any initialisation options go here
   });
   let countryCode = document.querySelector(".iti__selected-flag");
   countryCode.addEventListener("click", listenCountryCode);
   function listenCountryCode() {
      document.querySelector(".iti.iti--container").addEventListener("click", setCountryCode);
   }
   setCountryCode();
   function setCountryCode(e) {
      // if (e.target.closest(".iti.iti--container li")) {
      countryCode = document.querySelector(".iti__selected-flag");
      var el = countryCode.getAttribute("title");
      var numEl = parseInt(el.match(/\d+/));
      document.getElementById("phone").value = `+${numEl}`;
      // }
   }
}
