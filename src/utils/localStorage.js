export const saveListToLocalStorage = (list) => {
  localStorage.setItem('itemList', JSON.stringify(list));
};

export const getListFromLocalStorage = () => {
  const storedList = localStorage.getItem('itemList');
  return storedList ? JSON.parse(storedList) : [];
};
