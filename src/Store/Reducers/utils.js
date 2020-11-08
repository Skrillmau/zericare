const updateObject = (prevObject, updatedValues) => {
    return {
        ...prevObject,
        ...updatedValues
    }
};

export default updateObject;