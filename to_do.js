
const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: Boolean
  });
  
 export const Task = mongoose.model('Task', taskSchema);