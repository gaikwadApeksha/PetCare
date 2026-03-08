import React, { useState } from "react";

const AddPet = () => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    age: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pet Added Successfully 🐾\nName: ${form.name}`);
    setForm({
      name: "",
      type: "",
      age: "",
      description: "",
      imageUrl: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🐶 Add a New Pet</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Pet Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <select
          style={styles.input}
          name="type"
          value={form.type}
          onChange={handleChange}
          required
        >
          <option value="">Select Pet Type</option>
          <option>Dog</option>
          <option>Cat</option>
          <option>Rabbit</option>
          <option>Bird</option>
          <option>Other</option>
        </select>

        <input
          style={styles.input}
          type="number"
          name="age"
          placeholder="Age (years)"
          value={form.age}
          onChange={handleChange}
          required
        />

        <textarea
          style={styles.textarea}
          name="description"
          placeholder="Pet Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="url"
          name="imageUrl"
          placeholder="Pet Image URL"
          value={form.imageUrl}
          onChange={handleChange}
        />

        <button style={styles.button}>Add Pet</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "60px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    color: "#ff6f61",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    height: "80px",
  },
  button: {
    backgroundColor: "#ff6f61",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default AddPet;
