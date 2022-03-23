const initial_state = {
  courseData: null,
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'COURSES_COLLECTION': {
      return {...state, courseData: action.courseData};
    }

    default: {
      return state;
    }
  }
};

export default reducer;
