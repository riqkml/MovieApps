const studentData = {
  title: 'awe',
  desc: 'awes',
  student: [
    {
      id: 1,
      name: 'ary',
      age: 27,
    },
    {
      id: 2,
      name: 'arya',
      age: 21,
    },
    {
      id: 3,
      name: 'aryo',
      age: 25,
    },
  ],
};

const studentReducer = (state = studentData, action) => {
  switch (action.type) {
    case 'ADD-DATA':
      return {
        ...state,
        student: [...state.student, action.data],
      };
    case 'DELETE-DATA':
      return {
        ...state,
        student: state.student.filter((filter) => filter.id !== action.id),
      };

    default:
      return state;
  }
};

export default studentReducer;
