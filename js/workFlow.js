    //fast search code

            // var createdAt = this.OrderInfo.createdAt;
            // var customer = this.OrderInfo.customer;
            // var status = this.OrderInfo.status;
            // var shippedAt = this.OrderInfo.shippedAt;

            // var name = this.ShipTo.name;
            // var Address = this.ShipTo.Address;
            // var ZIP = this.ShipTo.ZIP;
            // var Region = this.ShipTo.Region;
            // var Country = this.ShipTo.Country;

            // var firstName = this.CustomerInfo.firstName;
            // var lastName = this.CustomerInfo.lastName;
            // var address = this.CustomerInfo.address;
            // var phone = this.CustomerInfo.phone;
            // var email = this.CustomerInfo.email;


        //add object            
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