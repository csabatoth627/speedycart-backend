import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

const addOrderItems = asyncHandler(async(res,req) => {
    res.send("Add order items")
});

const getMyOrders = asyncHandler(async(res,req) => {
    res.send("Get my orders")
});

const getOrderById = asyncHandler(async(res,req) => {
    res.send("Get order by id")
});

const updateOrderToPaid = asyncHandler(async(res,req) => {
    res.send("Update order to paid")
});

const updateOrderToDelivered = asyncHandler(async(res,req) => {
    res.send("Update order to delivered")
});

const getOrders = asyncHandler(async(res,req) => {
    res.send("Get orders")
});

export{
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToDelivered,
    updateOrderToPaid,
    getOrders,
}