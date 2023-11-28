import express from "express";
import { createHotel, 
    getHotelRooms, 
    deleteHotel, 
    getHotel, 
    updateHotel, 
    getHotels, 
    countByCity, 
    countByType} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel)
//UPDATE
router.put("/:id", verifyAdmin, updateHotel)
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)
//GET
router.get("/find/:id", getHotel)
//GET ALL
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)

export default router;