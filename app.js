errorMessage = {
  username: {
    fill: "required",
    length: "name must be between 3 and 10",
  },
  email: {
    fill: "requierd",
    format: "email should be in format : abc@domain.tld",
  },
  password: {
    fill: "required",
    format:
      "password should be have one uppercase letter, one lowercase letter and one number",
    length: "length of password at least should be 8 chracter",
    same: "the password and confirm password are not same",
  },
};

$("#my-form").submit(function (e) {
  e.preventDefault();

  $("#usernames").keyup(function (e) {
    validitionUsername();
  });
  function validitionUsername() {
    let usernameValue = $("#usernames").val();

    if (usernameValue === "") {
      $("#usercheck").text(errorMessage.username.fill);
    } else if (usernameValue.length < 3 || usernameValue.length > 10) {
      $("#usercheck").text(errorMessage.username.length);
    } else {
      $("#usercheck").text("");
    }
  }

  $("#email").keyup(function (e) {
    validitionEmail();
  });
  function validitionEmail() {
    let emailValue = $("#email").val();
    const emailRegex =
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (emailValue === "") {
      $("#emailcheck").text(errorMessage.email.fill);
    } else if (!emailRegex.test(emailValue)) {
      $("#emailcheck").text(errorMessage.email.format);
    } else {
      $("#emailcheck").text("");
    }
  }

  $("#password").keyup(function (e) {
    validitionPassword();
  });
  function validitionPassword() {
    let passwordValue = $("#password").val();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/;

    if (passwordValue === "") {
      $("#passwordcheck").text(errorMessage.password.fill);
    } else if (passwordValue.length < 8) {
      $("#passwordcheck").text(errorMessage.password.length);
    } else if (!passwordRegex.test(passwordValue)) {
      $("#passwordcheck").text(errorMessage.password.format);
    } else {
      $("#passwordcheck").text("");
    }
  }

  $("#conpassword").keyup(function (e) {
    validitionConfirmPassword();
  });
  function validitionConfirmPassword() {
    let repasswordValue = $("#conpassword").val();
    let passwordValue = $("password").val();

    if (repasswordValue === "") {
      $("#repasswordcheck").text(errorMessage.password.fill);
    } else if (passwordValue !== repasswordValue) {
      $("#passwordcheck").text(errorMessage.password.same);
      $("#repasswordcheck").text(errorMessage.password.same);
    } else {
      $("#passwordcheck").text("");
    }
  }

  $("#submitbtn").click(function () {  
      validitionUsername();
      validitionEmail();
      validitionPassword();
      validitionConfirmPassword();
      });

});
