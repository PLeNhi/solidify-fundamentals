
interface Order {
    orderId: string;
    total: number;
    name: string;
}

const getORderList= ()=> new Promise((resolve) => { setTimeout(() => { resolve(["Order 1", "Order 2", "Order 3"]) }, 1000)});

const getOrderDetails = (orderId: string) => new Promise((resolve) => { setTimeout(() => { resolve({ orderId, total: 100, name: "Order " + orderId }) }, 1500) });

const processOrders =  () =>{
    const orderListPromise = getORderList();

    orderListPromise.then((orderList) => {
        console.log("Order List:", orderList);
        const orderDetailsPromises = (orderList as string[]).map(orderId => getOrderDetails(orderId));
        return Promise.all(orderDetailsPromises);
    }).then((orderDetails) => {
        console.log("Order Details:", orderDetails);
        try {
            const totalRevenue = (orderDetails as Order[]).reduce((sum, order) => sum + order.total, 0);
            console.log("🚀 ~ processOrders ~ totalRevenue:", totalRevenue)
        }
        catch(error){
            console.error("Error calculating total revenue:", error);
        }
      
    }).catch((error) => {
        console.error("Error processing orders:", error);
    });
}

processOrders();