const form = document.querySelector("#signup-form");
const creditCard = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("cc", creditCard.value);
  console.log("terms", termsCheckbox.checked);
  console.log("veggieSelect", veggieSelect.value);
  //then we could send this data somewhere else, display it on the page
  //or send it to a database
});

//input event

const formData = {};

for (let input of [creditCard, termsCheckbox, veggieSelect]) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
  });
}

// creditCard.addEventListener("input", function (e) {
//   console.log("cc changed", e);
//   formData["cc"] = e.target.value;
// });

// veggieSelect.addEventListener("input", function (e) {
//   console.log("veggie changed", e);
//   formData["veggie"] = e.target.value;
// });

// termsCheckbox.addEventListener("input", function (e) {
//   console.log("checkbox changed", e);
//   formData["agreeToTerms"] = e.target.checked;
// });
