var order = document.getElementById("order");
order.addEventListener("click", function(){window.open("http://www.example.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");

});






function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var whereareyoufrom = document.getElementById("whereareyoufrom").value;
    var phone = document.getElementById("phone").value;
    if (name == "" || email == "" || whereareyoufrom == "" || phone == "") {
      alert("All fields must be filled out");
      return false;
    }
    if (!email.includes("@")) {
      alert("Email address must be valid");
      return false;
    }
    return true;
  }




