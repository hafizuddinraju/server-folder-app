import { RequestHandler } from "express";

import Todonew, { TodoModel } from "../models/todosnew";

export const createToDoNew: RequestHandler = async (req, res, next) => {
  try {
    const data: TodoModel = req.body;
    console.log("Data", data);
    var todos = await Todonew.create(data);
    return res
      .status(200)
      .json({ message: "TodoNew created successfully", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getToDoNew: RequestHandler = async (req, res, next) => {
  try {
    var {id} = req.params;
    
    const filter = {folderId : id}
    await Todonew.countDocuments(filter)
    var todos = await Todonew.find(filter);
    return res.status(200).json({ message: "Single todos!", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};


export const updateToDoNew: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    var todos = await Todonew.findByIdAndUpdate(id, req.body, { new: true });
    return res
      .status(200)
      .json({ message: "Todo updated successfully!", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteToDoNew: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    var isDeleted = await Todonew.findByIdAndDelete(id);
    if (!isDeleted) throw new Error("Failed to delete todo");
    return res.status(200).json({ message: "Todo deleted successfully!" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
