import * as mongoose from "mongoose";
import { Model } from "mongoose";

type TodoType = TodoModel & mongoose.Document;
export interface TodoModel {
  title: {
    type: String,
    required: true,
  };
  folderId: {
    type: String,
    required: true,
  };
  
}
const TodosNewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  folderId: {
    type: String,
    required: true,
  }
  
});
const Todo: Model<TodoType> = mongoose.model < TodoType > ("Todonew", TodosNewSchema);
export default Todo;