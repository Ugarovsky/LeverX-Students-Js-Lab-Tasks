const sortFields = [];

function sortProducts(fieldName, currenOrderId) {
    updateSortFieldsArray(fieldName);

    const products = Orders[currenOrderId - 1].products
        .sort((firstProduct, secondProduct) => {
            const result = [];
            
            sortFields.forEach(field => {
                let sortFunction = (a, b) => a > b;
                
                if (field.isDescending) {
                    sortFunction = (a, b) => a < b;
                }

                if (sortFunction(firstProduct[field.name], secondProduct[field.name])) {
                    result.push(1);
                }
                else {
                    result.push(-1);
                }
            });

            return result.reduce((accumulator, currentValue) => accumulator + currentValue);
        });

    updateProductsTableView(products);
}

function updateSortFieldsArray(fieldName) {
    const fieldIndex = sortFields.findIndex(field => field.name == fieldName);
    const field = sortFields[fieldIndex];

    if (field) {
        if (field.isDescending) {
            sortFields.splice(fieldIndex, 1);
        }
        else {
            field.isDescending = true;
        }
    }
    else {
        sortFields.push({
            name: fieldName,
            isDescending: false
        });
    }
}

function updateProductsTableView(products) {
    // Your table render function goes here
    // Hopin' all the code I wrote work well
    // I'm pod pivom)))))))))
}
