// it will help  to avoid unnecessary re-creations for better optimizing performance it is helpful
// when our component re-render that time object and array crate its instances so to avoid
//  this we use these freeze objects
export const EMPTY_ARRAY = Object.freeze([]);
export const EMPTY_OBJECT = Object.freeze({});
