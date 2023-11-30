import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if(orderItems && orderItems.length === 0){
        res.status(400);
        throw new Error("No order item")
    } else {
        const order = new Order({
            orderItems: orderItems.map((item) => ({
                ...item,
                product: item._id,
                _id:undefined
            })),
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        const createOrder = await order.save();

        res.status(201).json(createOrder)
    }
});



const getMyOrders = asyncHandler(async (req, res) => {
    res.send("Get my orders");
});

const getOrderById = asyncHandler(async (req, res) => {
    res.send("Get order by id");
});

const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send("Update order to paid");
});

const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send("Update order to delivered");
});

const getOrders = asyncHandler(async (req, res) => {
    res.send("Get orders");
});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToDelivered,
    updateOrderToPaid,
    getOrders,
}