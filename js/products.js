const sortFields = [];

function sortProducts(fieldName, currenOrderId) {
    updateSortFieldsArray(fieldName);

    const products = Orders[currenOrderId - 1].products
        .sort((firstProduct, secondProduct) => {
            const result = [];
            
            sortFields.forEach(field => {
                let sortFunction = (a, b) => a < b;
                
                if (field.isDescending) {
                    sortFunction = (a, b) => a > b;
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

function updateProductsTableView(products, cleanSortFields) {
    if (cleanSortFields) {
        sortFields = [];
    }

    updateProductsTableHeadView();
    updateProductsTableBodyView(products);
}

function updateProductsTableHeadView() {
    displayOrders = sortFields.map(field => { 
        return {
            name: field.name, 
            viewOrder: field.isDescending ? '↓' : '↑'
        };
    })

    const productsViewOrder = displayOrders.find(field => field.name == 'name');
    const unitPriceViewOrder = displayOrders.find(field => field.name == 'price');
    const quantityViewOrder = displayOrders.find(field => field.name == 'quantity');
    const totalViewOrder = displayOrders.find(field => field.name == 'totalPrice');

    const element = document.getElementById('products-table-head');

    element.innerHTML = `
        <tr>
            <td class="header-item" onClick="sortProducts('name', currentOrderId)">
                Product ${(productsViewOrder ? productsViewOrder.viewOrder : '')}
            </td>
            <td class="header-item" onClick="sortProducts('price', currentOrderId)">
                Unit Price ${(unitPriceViewOrder ? unitPriceViewOrder.viewOrder : '')}
            </td>
            <td class="header-item" onClick="sortProducts('quantity', currentOrderId)">
                Quantity ${(quantityViewOrder ? quantityViewOrder.viewOrder : '')}
            </td>
            <td class="header-item" onClick="sortProducts('totalPrice', currentOrderId)">
                Total ${(totalViewOrder ? totalViewOrder.viewOrder : '')}
            </td>
        </tr>
    `;
}

function updateProductsTableBodyView(products) {
    const element = document.getElementById('products-table-body');
    element.innerHTML = '';

    products.forEach(product => {
        element.innerHTML += `
            <td>
                <strong>${product.name}</strong>
            </td>
            <td>
                <strong>${product.price}</strong>
                ${product.currency}
            </td>
            <td>
                <strong>${product.quantity}</strong>
            </td>
            <td>
                <strong>${product.totalPrice}</strong>
                ${product.currency}
            </td>
        `; 
    });
}
