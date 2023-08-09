
// Function to validate the form
    function validateForm(event) {
        event.preventDefault(); 

        // Get the form elements
        const form = event.target;

        const inputs = form.querySelectorAll('input, select');
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        let isValid = true;

        // Check for empty inputs
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });

        // Check for unchecked checkboxes
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                isValid = false;
                checkbox.parentNode.classList.add('invalid');
            } else {
                checkbox.parentNode.classList.remove('invalid');
            }
        });

        // Display alert if form is invalid
        if (!isValid) {
            alert('Please fill in all fields and check the required checkboxes.');
        } else {
            alert('Form submitted successfully.');
            form.reset(); 
        }
    }

        const forms = document.querySelectorAll('form')
        forms.forEach(form => {
        form.addEventListener('submit', validateForm);
         });

// // This is the js for the API call which would contain back-end issues.
// // openai API configuration
//     import { Configuration, OpenAIApi } from "openai";
//     const configuration = new Configuration({
//         organization: organizationId,
//         apiKey: apiKey,
//     });
//     const openai = new OpenAIApi(configuration);
//     const engineResponse = await openai.listEngines();

//     const apiKey = "";
//     const organizationId = "";
 
// // define function
//     async function getRecipe(event) {
//         event.preventDefault();
    
//         const inputFood = document.querySelector("#inputFood").value;
    
//     // Define apiUrl and requestData based on use case
//         const apiUrl = "https://api.openai.com/v1/models";
//         const requestData = {
//             prompt: 'Suggest a recipe using the following ingredients: ${inputFood}',
//             max_tokens: 100           
//         };
 
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ${apiKey}',
//                 'OpenAI-Organization': organizationId,
//             },
//             body: JSON.stringify(requestData)
//         });
    
//         console.log(response);

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
    
//         const data = await response.json();
//         const recipe = data.choices[0].text;

//         console.log(recipe);

//         document.querySelector('#recipeResult').textContent = recipe;
//     }
    
//     // Attach the getRecipe function to an event
//     const getRecipeButton = document.querySelector('#getRecipeBtn');
//     getRecipeButton.addEventListener('click', getRecipe);
    