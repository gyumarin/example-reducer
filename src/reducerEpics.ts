import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';

import slice from './NEW/slice';
import gorestSlice from './GOREST/gorestSlice';
import defaultSlice from './DEFAULT/defaultSlice';
import {exampleRootReducer} from './OLD/reducer';
import {exampleRootEpic} from './NEW/epic';
import {exampleEpic} from './OLD/epic';
import {gorestEpic} from './GOREST/gorestEpic';
import {defaultEpic} from './DEFAULT/defaultEpic';

/**
 * combineEpics() : as the name suggests, allows you to take multiple epics and combine them into a single one.
 *                  Please keep in mind that the order in which epics are combined affect the order in which they are executed and receive actions.
 *
 *          번역   : 이름에서 알 수 있듯이 여러 에픽을 가져와 하나의 에픽으로 결합할 수 있습니다. 에픽이 결합되는 순서는 에픽이 실행되고 액션을 받는 순서에 영향을 미친다는 점에 유의하십시오.
 *
 *          궁금점  : rootEpic에서 에픽을 결합하는데. 굳이 각 에픽에서 export 할때 combine에 감싸는 이유는? 형식을 맞추기 위한 것인가?
 */
export const rootEpic = combineEpics(
  exampleRootEpic,
  exampleEpic,
  gorestEpic,
  defaultEpic,
);

export const rootReducer = combineReducers({
  new: slice,
  old: exampleRootReducer,
  gorest: gorestSlice,
  default: defaultSlice,
});
