
//create global var to access container to add to it when input is submitted
const resultDiv = document.querySelector(".container")

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let option = document.querySelector(".inputField").value;

  let search = `https://api.edamam.com/api/recipes/v2?q=${option}&app_id=da6b5bfd&app_key=94031ae7cc4322e3ef2c5e273907f2fc&type=public&random=true`;

  fetch(search)
    .then((res) => res.json())
    .then((res) => {
      //log data object
      //console.log(res);
      
      //create var to create list data will be put into
      let unList = document.createElement("ul");

      //loop through data arr to access names
      //create a class with 'name' for each then put into list
      for (let i = 0; i < res.hits.length; i++) {
        console.log(res.hits[i].recipe.label);
        let li = document.createElement("li");
        let textEl = document.createElement("p")
        textEl.innerText = `${res.hits[i].recipe.label}`;
        textEl.classList.add("name")
        li.appendChild(textEl)

        //create div el w/ class 'contain'
        let recContainer = document.createElement("div")
        recContainer.classList.add("contain")
        //create img el w/ class 'thum-img'
        let thum = document.createElement("img");
        thum.classList = "thum-img";
        thum.src = res.hits[i].recipe.images.SMALL.url;
        //append the recipes and their thumbnails in container
        recContain.appendChild(thum);
        li.appendChild(recContainer)
        unList.appendChild(li);

        //add eventList to open modal if thum is clicked
        li.addEventListener("click", function () {
          let modal = document.getElementById("myModal");
          modal.innerHTML = "";
          
          modal.style.display = "block";

          let modalInfo = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${res.hits[i].recipe.image}"/>
            <h1>${res.hits[i].recipe.label}</h1>
            <ul id="${res.hits[i].recipe.url}">
            <h2>Health Concerns / Allergies</h2>
            </ul>
            <ul class="nutrition">
            <h2>Basic Nutrition Facts</h2> 
              <li>Calories: ${Math.round(res.hits[i].recipe.totalNutrients.ENERC_KCAL.quantity)} ${res.hits[i].recipe.totalNutrients.ENERC_KCAL.unit}</li>
              <li>Servings: ${res.hits[i].recipe.yield}</li>
              <li>Fat: ${Math.round(res.hits[i].recipe.totalNutrients.FAT.quantity)} ${res.hits[i].recipe.totalNutrients.FAT.unit}</li>
              <li>Saturated Fat: ${Math.round(res.hits[i].recipe.totalNutrients.FASAT.quantity)} ${res.hits[i].recipe.totalNutrients.FASAT.unit}</li>
              <li>Carbohydrates: ${Math.round(res.hits[i].recipe.totalNutrients.CHOCDF.quantity)} ${res.hits[i].recipe.totalNutrients.CHOCDF.unit}</li>
              <li>Protein: ${Math.round(res.hits[i].recipe.totalNutrients.PROCNT.quantity)} ${res.hits[i].recipe.totalNutrients.PROCNT.unit}</li>
              <li>Sugar: ${Math.round(res.hits[i].recipe.totalNutrients.SUGAR.quantity)} ${res.hits[i].recipe.totalNutrients.SUGAR.unit}</li>
              <li>Fiber: ${Math.round(res.hits[i].recipe.totalNutrients.FIBTG.quantity)} ${res.hits[i].recipe.totalNutrients.FIBTG.unit}</li>
            </ul>
              <a href="${res.hits[i].recipe.url}" rel="noopener noreferrer" target="_blank">Recipe Page</a>
          </div>
          `;
          //insert information into modal-container
          modal.insertAdjacentHTML("beforeend", modalInfo);


          //create closing events for modal
          let span = document.getElementsByClassName("close")[0];
          //close the modal when the user clicks on 'x' 
          span.onclick = function () {
            modal.style.display = "none";
          };
          // close it when the user clicks anywhere outside of the modal 
          window.onclick = function (event) {
            if (event.target === modal) {
              modal.style.display = "none";
            }
          };
          
          //adding info to Health list above
          let healthContent = document.getElementById(`${res.hits[i].recipe.url}`);
          let healthLabel = "";
          for (let j = 0; j < res.hits[i].recipe.healthLabels.length; j++) {
            healthLabel += `<li>${res.hits[i].recipe.healthLabels[j]}</li>`;
          }
          healthContent.insertAdjacentHTML("beforeend", healthLabel);

        });
      }
      resultDiv.innerHTML = "";
      resultDiv.appendChild(unList);
    });
  })

