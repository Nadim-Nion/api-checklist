const loadSingleData = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
}

loadSingleData();

const displaySingleUser = user => {
    console.log(user);
}

// meal db
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

const toggleSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle;
}
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);

    // display spinner
    toggleSpinner('block');

    // hide previous search result
    toggleSearchResult('none');

    // clear data in the input field
    document.getElementById('search-field').value = '';
}

const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

// loadMeal('fish');


const displayMeals = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    meals?.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <p>${meal.strIngredient18 ? meal.strIngredient18 : 'Not found'}</p>
        <button onclick="loadMealDetails('${meal.strMeal}')">Click me</button>
        `;
        container.appendChild(div);
    });

    // Hide spinner
    toggleSpinner('none');

    // display new search result
    toggleSearchResult('block');

}


const loadMealDetails = mealName => {
    console.log(mealName);
}