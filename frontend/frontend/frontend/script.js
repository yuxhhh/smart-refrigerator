// Example inventory
let inventory = ["Milk", "Eggs", "Cheese", "Tomatoes"];

function displayInventory() {
    const list = document.getElementById("items-list");
    list.innerHTML = "";
    inventory.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function suggestMeals() {
    const mealList = document.getElementById("meal-list");
    mealList.innerHTML = "<p>🍳 Omelette (Eggs, Cheese)</p><p>🥪 Cheese Sandwich</p>";
}

// Load data
displayInventory();
suggestMeals();

