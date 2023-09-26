export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("COULD NOT FETCH.", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("COULD NOT FETCH. ERROR.", error.message);
    return false;
  }
};
