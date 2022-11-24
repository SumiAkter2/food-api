console.log('dog');

const loadDog=()=>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res=>res.json())
    .then(data=>displayDog(data))
}

const displayDog=dogs=>{
    const addDiv=document.getElementById('dog-id');
    dogs.forEach(dog=>{
        const div=document.createElement('div');
        div.classList.add('card');
        div.innerHTML=`
         <img src="${dog.image.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${dog.name}</h5>
          <p> id: ${dog.id} , height: ${dog.height.imperial}</p>
          <p class="card-text">${dog.temperament}</p>
        </div>
      </div>
      `;
      addDiv.appendChild(div);
      console.log(dog)
    })
    
}