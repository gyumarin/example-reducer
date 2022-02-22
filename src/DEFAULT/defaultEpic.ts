import {Action} from 'redux';
import {
  ActionsObservable,
  combineEpics,
  ofType,
  StateObservable,
} from 'redux-observable';
import {Observable, of} from 'rxjs';
import {mergeMap, map, catchError, delay} from 'rxjs/operators';
import {
  defaultEpicAction,
  defaultEpicToErrorAction,
  defaultEpicToSuccessAction,
} from './defaultSlice';
import {payloadDefaultTypes} from './types';

/**
 *
 * 순수 함수
 *
 * 파이프를 이해하기 위해서 반드시 선행 학습해야 하는 개념이다.
 * 순수 함수는 다음을 준수하는 함수를 뜻한다.
 *   1. 같은 입력 값에선 같은 반환 값을 보장한다.
 *   2. 함수 외부 스코프의 그 어떠한 변수의 값도 바꾸지 않는다.
 *
 */
class DefaultEpicClass {
  //메서드
  Observable_create_func(data: payloadDefaultTypes) {
    // Observable : 시간의 흐름에 따라 발생하는 이벤트들의 집합.
    return new Observable(subscriber => {
      console.log('use_subscriber_func', data);
      this.use_subscriber_func(subscriber, data);
    });
  }
  //메서드
  use_subscriber_func(subscriber, data: payloadDefaultTypes) {
    return new Promise(() => {
      /**
       * 여기에 수행할 비동기 함수 작성
       *    subscriber.next({수행결과 반환})
       *
       */
      setTimeout(() => {
        let ram = Math.round(Math.random() * (5000 - 1000) + 5000);

        if (ram > 1500) {
          subscriber.next({
            value: data.value + ram,
            second: ram,
          });
        } else {
          subscriber.next({
            error: 'second is not 500 under ',
            second: ram,
          });
        }
      }, 0);
    });
  }
}
const exampleClass = new DefaultEpicClass();

// function (action$: Observable<Action>, state$: StateObservable<State>): Observable<Action>;

// 에픽 함수는 action$과 state$를 매개변수로 받고 action.pipe()를 반환한다.
// 즉 매개변수 action$, state$를 이용해 pipe를 수행한다.
const defaultActionEpic = (
  action$: ActionsObservable<Action>,
  state$: StateObservable<any>,
): Observable<Action> => {
  return action$.pipe(
    ofType(defaultEpicAction), //filter(action => action.type === defaultEpicAction)과 동일
    mergeMap(
      //mergeMap(리턴_함수, 처리_갯수)
      //mergeMap : 소스 Observable에서 내보낸 항목에 적용될 때 Observable을 반환하는 함수
      (action: any) =>
        exampleClass
          .Observable_create_func(state$.value.rootReducer.default)
          .pipe(
            delay(1000),
            map((result: any) => isError(result)),
          ),
    ),
  );
};
const isError = (result: any) => {
  if (result.error) {
    return defaultEpicToErrorAction({
      error: result.error,
      second: result.second,
    });
  } else {
    return defaultEpicToSuccessAction({
      //action의 객체 구조대로 반환.
      value: result.value,
      second: result.second,
    });
  }
};
export const defaultEpic = combineEpics(defaultActionEpic);

//combine : 합치다.
