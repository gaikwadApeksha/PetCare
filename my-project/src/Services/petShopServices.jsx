//signup
export const signupUser = async (userData) => {
  const response = await API.post("/auth/signup", userData);
  return response.data;
};

//Login
export const loignUser = async (loginData) => {
  const response = await API.post("/auth/", loginData);
  return response.data;
};

//add new pet
export const addPet = async (petData) => {
  const response = await API.post("/pets", petData);
  return response.data;
};

export const getPets = async () => {
  const response = await API.post("/pets");
  return response.data;
};
