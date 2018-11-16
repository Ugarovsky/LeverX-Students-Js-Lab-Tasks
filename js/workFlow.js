var shipName = document.getElementById("name");
var shipStreet = document.getElementById("street");
var shipCode = document.getElementById("code");
var shipCity = document.getElementById("city");
var shipCountry = document.getElementById("county");
        //add list objects      
window.onload = function(){   
         for (var count = 0; count < Orders.length; count++) {
			var orderID = document.createTextNode("Order " + Orders[count].id);
            var createdAt = document.createTextNode(Orders[count].OrderInfo.createdAt);
            var customer = document.createTextNode(Orders[count].OrderInfo.customer);
            var orderStatus = document.createTextNode(Orders[count].OrderInfo.status);           
            var shippedAt = document.createTextNode("Shipped:" + Orders[count].OrderInfo.shippedAt);

            var newOrderBox = document.createElement("li");
            newOrderBox.className="order-box";
            var numberInfo = document.createElement("article");
            numberInfo.className="number-info";

            var IDInfo = document.createElement("h2");
            var customerInfo = document.createElement("p");
            var createdInfo = document.createElement("p");
            var timeInfo = document.createElement("time");
            var statusInfo = document.createElement("p");

            var a = document.getElementById("order-list");
            a.appendChild(newOrderBox);
            newOrderBox.id= count + 1;
            newOrderBox.setAttribute('onClick','reply_click(this.id)');

            newOrderBox.appendChild(numberInfo);
            numberInfo.appendChild(IDInfo);
            IDInfo.appendChild(orderID);
            numberInfo.appendChild(customerInfo);
            numberInfo.appendChild(createdInfo);
            customerInfo.appendChild(customer);
            createdInfo.appendChild(shippedAt);

            var orderState = document.createElement("article");
            orderState.className="order-status";
            
            orderState.appendChild(timeInfo);
            orderState.appendChild(statusInfo);
            timeInfo.appendChild(createdAt);
            statusInfo.appendChild(orderStatus);
            newOrderBox.appendChild(orderState);

        };
        getOrderCount(count);
};
        //renew data
function reply_click(nowId){
        var orderTittle = document.getElementById("order-title");
        var orderCustomer = document.getElementById("order-customer");
        var orderedDate = document.getElementById("ordered-date");
        var orderShipped = document.getElementById("shipped-date");
        
        orderTittle.innerHTML = "Order: " + Orders[nowId-1].id;
        orderCustomer.innerHTML = "Customer:" + Orders[nowId-1].OrderInfo.customer;
        orderedDate.innerHTML = "Created:" + Orders[nowId-1].OrderInfo.createdAt; 
        orderShipped.innerHTML = "Shipped:" + Orders[nowId-1].OrderInfo.shippedAt;

        shipName.innerHTML = "Name: "+ Orders[nowId-1].ShipTo.name;
        shipStreet.innerHTML = "Street: "+ Orders[nowId-1].ShipTo.Address;
        shipCode.innerHTML = "Zip Code: "+ Orders[nowId-1].ShipTo.ZIP;
        shipCity.innerHTML = "City: "+ Orders[nowId-1].ShipTo.Region;
        shipCountry.innerHTML = "County: "+ Orders[nowId-1].ShipTo.Country;

         //active list element
        var newOrderBox = document.body.getElementsByClassName("order-box");
        for(var i = 1 ; i <= newOrderBox.length; i++){
            if ( i == +nowId){
                newOrderBox[i-1].className = "order-box active-list";
            }
            else{
                newOrderBox[i-1].className ="order-box no-active";
            }
        }
};
function getCustomerInfo(nowId){
            shipName.innerHTML = "First Name: "+ Orders[nowId-1].CustomerInfo.firstName;
            shipStreet.innerHTML = "Last Name: "+ Orders[nowId-1].CustomerInfo.lastName;
            shipCode.innerHTML = "Address: "+ Orders[nowId-1].CustomerInfo.address;
            shipCity.innerHTML = "Phone: "+ Orders[nowId-1].CustomerInfo.phone;
            shipCountry.innerHTML = "E-Mail: "+ Orders[nowId-1].CustomerInfo.email;
}
//order count
function getOrderCount(count){
        var order = document.createTextNode("order(" + count + ")");
        var orderCount = document.getElementById("order-count");
        orderCount.textContent = "";
        orderCount.appendChild(order);
}
//search
function startSearch() {
            var orderCount = document.getElementById("order-count");
            var count = 0;
            var myInput= document.querySelector(".order-search");
            const term = myInput.value.toLowerCase();
            const orders = document.body.getElementsByClassName("order-box");
            Array.from(orders).forEach(function(newOrderBox){
                const title = newOrderBox.firstElementChild.textContent;
                if(title.toLowerCase().indexOf(term) != -1){
                    newOrderBox.style.display = "flex";
                    count++;
                } else {
                    newOrderBox.style.display = "none";
                };
            });
            getOrderCount(count);
};
function refreshSearch(){
            var count = 0;
            var myInput= document.querySelector(".order-search");
            myInput.value = "";
            const orders = document.body.getElementsByClassName("order-box");
            Array.from(orders).forEach(function(newOrderBox){
                count++;
                const title = newOrderBox.firstElementChild.textContent;
                    newOrderBox.style.display = "flex";
        });
        getOrderCount(count);
}


