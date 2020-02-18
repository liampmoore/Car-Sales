export function addFeature(id) {
    return {
      type: "ADD_FEATURE",
      payload: {
        feature: id
      }
    };
  }

  export function removeFeature(id) {
    return {
      type: "REMOVE_FEATURE",
      payload: {
        feature: id
      }
    };
  }