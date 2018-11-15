        //add list objects         
         for (var i = 0; i < Orders.length; i++) {
			var orderID = document.createTextNode("Order " + Orders[i].id);
            var createdAt = document.createTextNode(Orders[i].OrderInfo.createdAt);
            var customer = document.createTextNode(Orders[i].OrderInfo.customer);
            var orderStatus = document.createTextNode(Orders[i].OrderInfo.status);           
            var shippedAt = document.createTextNode("Shipped:" + Orders[i].OrderInfo.shippedAt);

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
            newOrderBox.id= i + 1;
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

        //renew data
        var shipName = document.getElementById("name");
        var shipStreet = document.getElementById("street");
        var shipCode = document.getElementById("code");
        var shipCity = document.getElementById("city");
        var shipCountry = document.getElementById("county");

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
        };

        function getCustomerInfo(nowId){
            shipName.innerHTML = "First Name: "+ Orders[nowId-1].CustomerInfo.firstName;
            shipStreet.innerHTML = "Last Name: "+ Orders[nowId-1].CustomerInfo.lastName;
            shipCode.innerHTML = "Address: "+ Orders[nowId-1].CustomerInfo.address;
            shipCity.innerHTML = "Phone: "+ Orders[nowId-1].CustomerInfo.phone;
            shipCountry.innerHTML = "E-Mail: "+ Orders[nowId-1].CustomerInfo.email;
        }
        //order count
        var order = document.createTextNode("order(" + i + ")");
        var orderCount = document.getElementsByClassName("over-menu");
        orderCount[0].appendChild(order);

        //fast search
        var myInput= document.querySelector(".order-search");
        myInput.addEventListener("keyup", function(e) {
            const term = e.target.value.toLowerCase();
            const orders = document.body.getElementsByClassName("order-box");
            Array.from(orders).forEach(function(newOrderBox){
                const title = newOrderBox.firstElementChild.textContent;
                if(title.toLowerCase().indexOf(term) != -1){
                    newOrderBox.style.display = "flex";
                } else {
                    newOrderBox.style.display = "none";
                };
            });
        });
