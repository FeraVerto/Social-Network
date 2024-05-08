export const updateObInArray = (
  item: any,
  itemId: any,
  objPropName: any,
  newObjProps: any
) => {
  return item.map((u: any) => {
    return itemId === u[objPropName] ? { ...u, ...newObjProps } : u;
  });
};
