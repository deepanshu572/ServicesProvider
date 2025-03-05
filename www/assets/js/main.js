// Uncheck all checkboxes when one is selected
$(document).on("change", "#selectedInp input[type='checkbox']", function () {
  $("#selectedInp input[type='checkbox']").not(this).prop("checked", false);
});

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
  } else if (eye2) {
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
function LoginSystem() {
  var loginBtn = document.getElementById("loginBtn");
  var email1 = "user";
  var password1 = "123";
  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var email = $("#email").val();
      var password = $("#password").val();
      if (email === "" || password === "") {
        alert("Please Fill Up The Form ☹");
        return false;
      }
      if (email != email1 || password != password1) {
        alert("Invalid Email or Password");
        return false;
      } else {
        alert("Login Successful ��");
        window.location.href = "otp.html";
        return true;
      }
    });
  }
}

function SignupSystem() {
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
      alert("All fields are required");
      return false;
    }
    if (mobile === mobileDB) {
      alert("user already exists");
      return false;
    }
    if (mobile.length != 10) {
      alert("Please enter valid 10 digit mobile number");
      return false;
    }

    if (regex.test(email)) {
      console.log("Valid Email address");
    } else {
      console.log("Invalid Email address");
      return false;
    }

    alert("successfully registerd !");
    window.location.href = "home.html";

    // reset form
    this.reset();

    // const response = await fetch("/api/signup", {
    //   method: "POST",
    //   body: formdata
    // });
    // const data = await response.json();
  });
}

function OtpSystem() {
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
}
const CategoryData = [
  {
    img: "../assets/img/category1.svg",
    title: "Electricity",
    subCat: [
      {
        title: "Subcategory 1",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 2",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 3",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 4",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 5",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 6",
        img: "../assets/img/cat_electric.svg",
      },
    ],
  },
  {
    img: "../assets/img/category2.svg",
    title: "farmer",
    subCat: [
      {
        title: "Subcategory 1",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 2",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 3",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 4",
        img: "../assets/img/cat_electric.svg",
      },
    ],
  },
  {
    img: "../assets/img/category3.svg",
    title: "cobler",
    subCat: [
      {
        title: "Subcategory 1",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 2",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 3",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 4",
        img: "../assets/img/cat_electric.svg",
      },
    ],
  },
  {
    img: "../assets/img/category4.svg",
    title: "washer",
    subCat: [
      {
        title: "Subcategory 1",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 2",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 3",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 4",
        img: "../assets/img/cat_electric.svg",
      },
    ],
  },
  {
    img: "../assets/img/category5.svg",
    title: "plumber",
    subCat: [
      {
        title: "Subcategory 1",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 2",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 3",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 4",
        img: "../assets/img/cat_electric.svg",
      },
    ],
  },
  {
    img: "../assets/img/category6.svg",
    title: "manager",
    subCat: [
      {
        title: "Subcategory 1",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 2",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 3",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 4",
        img: "../assets/img/cat_electric.svg",
      },
    ],
  },
  {
    img: "../assets/img/cat_electric.svg",
    title: "garage",
    subCat: [
      {
        title: "Subcategory 1",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 2",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 3",
        img: "../assets/img/cat_electric.svg",
      },
      {
        title: "Subcategory 4",
        img: "../assets/img/cat_electric.svg",
      },
    ],
  },
];

function SelectLocation() {
  const locationData = [
    {
      id: 1,
      name: "Ranchi",
    },
    {
      id: 2,
      name: "Gumla",
    },

    {
      id: 3,
      name: "Chatra",
    },
    {
      id: 4,
      name: "Jamtara",
    },

    {
      id: 5,
      name: "Palamu",
    },
  ];
  locationData.map((item) => {
    $("#Location").append(`<option value="${item.name}">${item.name}</option>`);
  });
}

function locationIdentifier() {
  // i want to destroy modal
  $("#locationModal").modal("hide");
  const location = $("#Location").val();
  $("#locData").text(location);
}

function CategoryFetching() {
  var categoryholder = "";
  var category = "";
  var x = 0;

  CategoryData.slice(0, 6).map((e) => {
    x++;
    categoryholder += `
        <a href="category.html" class="categories_data cat${x}">
          <div class="categories_img">
            <img src="${e.img}" alt="">
          </div>
          <div class="categories_title">
            <h4>${e.title}</h4>
          </div>
        </a>
        `;
  });
  console.log(category);

  document.getElementById("categoryData").innerHTML = categoryholder;
}

function CategoryMainFetching() {
  var CategoryHolder = "";
  CategoryData.map((item) => {
    CategoryHolder += `
  <button onclick='CategoryFilter(${JSON.stringify(
    item
  )})' class="category_box">
      <div class="category_box_img">
        <img src="${item.img}" alt="" />
      </div>
      <div class="category_txt">
        <p>${item.title}</p>
      </div>
    </button>
  `;
  });
  document.getElementById("CategoryMain").innerHTML = CategoryHolder;
}
function LoadAllCategory() {
  let AllCategoryData = "";

  CategoryData.map((item, index) => {
    let SubCatData = "";

    item.subCat.map((subitem) => {
      SubCatData += `
          <a href="productDetail.html">
              <div class="sub_catgory_img">
                  <img src="${subitem.img}" alt="" />
              </div>
              <p>${subitem.title}</p>
          </a>
      `;
    });

    AllCategoryData += `
      <div class="sub_category_data">
          <div class="category_title">
              <h1>${item.title}</h1>
          </div>
          <div class="sub_category_list">
              ${SubCatData} 
          </div>
      </div>
  `;
  });

  document.getElementById("CategorySub").innerHTML = AllCategoryData;
}

function CategoryFilter(item) {
  var catData = "";
  var SubCatData = "";
  if (item) {
    catData += `
       <div class="sub_category_data">
      <div class="category_title">
        <h1>${item.title}</h1>
      </div>
      <div class="sub_category_list" id="SubCategoryData">
      </div>
    </div>`;
    item.subCat.map((subitem) => {
      SubCatData += `
        <a href="productDetail.html">
          <div class="sub_catgory_img">
            <img src="${subitem.img}" alt="" />
          </div>
          <p>${subitem.title}</p>
        </a>
      `;
    });
  }
  document.getElementById("CategorySub").innerHTML = catData;
  document.getElementById("SubCategoryData").innerHTML = SubCatData;
}

function ChargesHolder() {
  var daysHold = "";
  var x = 0;
  const data = [
    {
      days: "Half Day",
      price: "$500",
    },
    {
      days: "Full Day",
      price: "$700",
    },
  ];
  data.map((item) => {
    x++;
    daysHold += `<div class="price_detail_price">
            <input type="checkbox" name="price" value="${item.days} | ${item.price}" id="price${x}" />
            <label for="price${x}"> <p id="halfDay">${item.days}</p> <b id="halfPrice">${item.price}</b></label>
          </div>`;
  });
  document.getElementById("selectedInp").innerHTML = daysHold;
}

$("#bookingData").submit(async function (e) {
  e.preventDefault();
  var selectedDays = [];
  $("input[name='price']:checked").each(function () {
    var data = $(this).val();
    let [day, price] = data.split(" | ");
    selectedDays.push(day, price);
    localStorage.setItem("selectedDays", JSON.stringify(selectedDays));
    location.href = "checkout.html";
  });
  console.log(selectedDays);
});

function allSearchData() {
  var searchRes = "";
  CategoryData.map((item) => {
    searchRes += `
    <a href="#" class="search_result_data">
              <div class="search_img">
               <img src="${item.img}" alt="">
              </div>
               <p>${item.title}</p>
          </a>
  `;
  });
  $("#searchResult").html(searchRes);
}

$("#search").on("input", function () {
  console.log($(this).val());

  let result = "";
  const inp = $(this).val().toLowerCase();
  const res = CategoryData.filter((item) =>
    item.title.toLowerCase().includes(inp)
  );
  console.log(res);

  if (res.length != 0) {
    res.map((item) => {
      result += `
          <a href="#" class="search_result_data">
                      <div class="search_img">
                      <img src="${item.img}" alt="">
                      </div>
                      <p>${item.title}</p>
                  </a>
          `;
    });
    $("#searchResult").html(result);
  } else {
    $("#searchResult").html("<p class='text-center'>No Results Found</p>");
  }
  if (!inp) {
    allSearchData();
  }
});
