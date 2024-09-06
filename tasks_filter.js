
const [filter, setFilter] = useState('all');

useEffect(() => {
  axios.get('/tasks')
    .then(response => {
      const tasks = response.data;
      if (filter === 'completed') {
        setTasks(tasks.filter(task => task.status));
      } else if (filter === 'incomplete') {
        setTasks(tasks.filter(task => !task.status));
      } else {
        setTasks(tasks);
      }
    });
});