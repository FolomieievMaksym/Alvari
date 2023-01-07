if (document.getElementById("form")) {
   let form = document.getElementById("form");
   form.addEventListener("submit", sendForm);
   async function sendForm(e) {
      e.preventDefault();
      let error = formValidate(form);
      let formData = new FormData(form);
      if (error === 0) {
         let response = await fetch("sendmail.php", {
            method: "POST",
            body: formData,
         });
         console.log("1");
         if (response.ok) {
            console.log("show Pop Up");
            form.reset();
         } else {
            console.log("error");
         }
      } else {
         alert("Заполните обязательные поля");
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
               error++;
            }
         } else if (input.name == "email") {
            if (emailReg(input)) {
               formAddError(input);
               console.log(emailReg(input));
               error++;
            }
         }
      }
      console.log(error);
      return error;
   }
   function formAddError(input) {
      input.parentElement.classList.add("_error");
      input.classList.add("_error");
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove("_error");
      input.classList.remove("_error");
   }

   function phoneReg(input) {
      return !/(dsa)/.test(input.value);
   }
   function emailReg(input) {
      // return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
      return !/dsa/.test(input.value);
   }
}
