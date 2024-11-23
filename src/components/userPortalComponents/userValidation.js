// Date Created: 2024-10-28
// Author: K00288477 Gary O'Connor

// Validation class for User functions

export default class UserValidation {

    // Validation for UserWasteLogForm
    userWasteValidation(itemDescription, selectedCategory){

        // Validate inputs

        // Item Description
        if(itemDescription === '' || itemDescription == null){
            return { isValid: false, message: 'Item description must be a non-empty string.'}
        }
        // item category
        if(selectedCategory == null || selectedCategory === ''){
            return {isValid: false, message: 'Please select a category.'}
        }
        return {isValid: true, message: 'Validation Successful'}
    }

    // validation for user log in
    userLogInValidation(email, password) {
        // check for valid email
        // console.log(email, password)
        if(email == null || email === ''){
            return { isValid: false, message: 'Please enter a valid email.', errorType: 'email' }
        }
        // check password is not empty
        if(password == null || password.length < 6){
            return { isValid: false, message: 'Please enter a valid password.' , errorType: 'password'}
        }
        return { isValid: true, message: 'Log In Successful' };
    }
}