export const fetchUsers = async () => {
  const response = await fetch(
    "https://68ad267ba0b85b2f2cf24e18.mockapi.io/profilio/"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};
