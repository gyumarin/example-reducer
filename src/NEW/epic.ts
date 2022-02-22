import {Action} from 'redux';
import {
  ActionsObservable,
  combineEpics,
  ofType,
  StateObservable,
} from 'redux-observable';
import {Observable, of} from 'rxjs';
import {exampleEpicAction, exampleEpicToSuccessAction} from './slice';
import {payloadSomeTypes} from './types';
import {mergeMap, map, catchError} from 'rxjs/operators';

class ExampleEpicClass {
  exampleTimer(data: payloadSomeTypes) {
    return new Observable(subscriber => {
      this.timer(subscriber, data);
    });
  }

  timer(subscriber, data) {
    return new Promise(() => {
      setTimeout(() => {
        subscriber.next({
          someValue1: data.someValue1 + 1,
          someValue2: data.someValue2 + 2,
        });
      }, 1000);
    });
  }
}

const exampleClass = new ExampleEpicClass();

const exampleProcessActionEpic = (
  action$: ActionsObservable<Action>,
  state$: StateObservable<any>,
): Observable<Action> => {
  return action$.pipe(
    ofType(exampleEpicAction),
    mergeMap((action: any) =>
      exampleClass.exampleTimer(action.payload).pipe(
        map((result: any) => {
          console.log('map', action.payload);
          return exampleEpicToSuccessAction({
            someValue1: result.someValue1,
            someValue2: result.someValue2,
          });
        }),
      ),
    ),
  );
};

export const exampleRootEpic = combineEpics(exampleProcessActionEpic);

//combine : 합치다.
