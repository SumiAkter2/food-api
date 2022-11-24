

// const loadMeal=()=>{
//  const searchInput=document.getElementById('search-id');
//  const searchValue=searchInput.value ;
//  searchInput.value='';
// console.log(searchValue)

// const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue} `;
// fetch(url)
// .then(res=>res.json())
// .then(data=>displayMeal(data.meals))
// }

// const displayMeal=meals=>{
//   const mealDetails=document.getElementById('add-div');
//  mealDetails.textContent="";
//  meals.forEach(meal=>{
//    console.log(meal)
//    const div=document.createElement('div');
//    div.classList.add('card')
//    div.innerHTML=`
//    <img width="200" src="${meal.strMealThumb}" class="card-img-top" alt="...">
//    <div class="card-body">
//      <h5 class="card-title">${meal.strMeal}</h5>
//      <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
//    </div>
//    `;
//    mealDetails.appendChild(div);
//  })
// }

const loadMeal=()=>{
  const searchId=document.getElementById('search-id');
  const searchInput=searchId.value ;
  searchId.value="";
  const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayMeal(data.meals))
}
const displayMeal=meals=>{
  const mealDetails=document.getElementById('add-div');
  mealDetails.textContent="";
  meals.forEach(meal=>{
    const div=document.createElement('div');
   
    div.classList.add('card')
    div.innerHTML=`
    <div onclick="loadMealDetail('${meal.idMeal}')" class="card h-100">
        <img  width="200" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
        </div>
    `;
    mealDetails.appendChild(div);
  })
}

const loadMealDetail=mealId=>{
const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
fetch(url)
.then(res=>res.json())
.then(data=>displayMealDetail(data.meals[0]));

}

const displayMealDetail=meal=>{
  const mealDetails=document.getElementById('meal-details');
  
  
    const div=document.createElement('div');
   
    div.classList.add('card')
    div.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
   mealDetails.appendChild(div);

}

