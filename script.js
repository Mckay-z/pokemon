async function fetchData() {
    try {
        // Get the value from the input field with id "pokemonName" and convert it to lowercase
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        
        // Fetch data from the PokeAPI for the specified Pokémon name
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        // Check if the response is not ok (status code is not in the range 200-299)
        if (!response.ok) {
            // Throw an error if the response is not ok
            throw new Error("Could not fetch resource");
        }

        // Parse the response data as JSON
        const data = await response.json();
        
        // Get the front sprite URL of the Pokémon from the response data
        const pokemonSprite = data.sprites.front_default;
        
        // Get the image element with id "pokemonSprite"
        const imgElement = document.getElementById("pokemonSprite");

        // If the sprite URL is available
        if (pokemonSprite) {
            // Set the src attribute of the image element to the sprite URL
            imgElement.src = pokemonSprite;
            // Make the image element visible
            imgElement.style.display = "block";
        } else {
            // Alert the user that no sprite is available for the Pokémon
            alert("No sprite available for this Pokémon.");
            // Hide the image element
            imgElement.style.display = "none";
        }
    } catch (error) {
        // Alert the user that the Pokémon name is invalid
        alert("Invalid Pokémon name. Please try again.");
        // Log the error to the console
        console.error(error);
    }
}
