const addStudent = (data) => {
  return (dispatch) => {
    dispatch({type: 'ADD-DATA', data});
  };
};
const deleteStudent = (id) => {
  return (dispatch) => {
    dispatch({type: 'DELETE-DATA', id: id});
  };
};

export {addStudent, deleteStudent};
