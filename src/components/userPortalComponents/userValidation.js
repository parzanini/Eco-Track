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
}