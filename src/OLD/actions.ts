// EPIC으로 가는 Action은 네임 제일 끝에 EPIC을 붙인다. ex) SOME_GOOD_ACTION_EPIC
// REDUCER으로 가는 Action은 네임 제일 끝에 REDUCER를 붙인다. ex) SOME_GOOD_ACTION_REDUCER

export const PROCESS_RESET_REDUCER = "src/folder/path/PROCESS_RESET_REDUCER";
export const processResetReducer = () => ({
  type: PROCESS_RESET_REDUCER,
});


export const PROCESS_ONE_REDUCER = "src/folder/path/PROCESS_ONE_REDUCER";
export const processOneReducer = () => ({
  type: PROCESS_ONE_REDUCER,
});
