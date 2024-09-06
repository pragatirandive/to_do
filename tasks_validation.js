
const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !description) {
      alert('Please fill in all fields');
      return;
    }
    await axios.post('/tasks', { name, description });
    setName('');
    setDescription('');
  };
  