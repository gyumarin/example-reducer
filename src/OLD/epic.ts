import {Action} from 'redux';
import {
  ActionsObservable,
  combineEpics,
  ofType,
  StateObservable,
} from 'redux-observable';
import {Observable, of} from 'rxjs';
import {PROCESS_RESET_REDUCER, processResetReducer} from './actions';
import {mergeMap, map, catchError} from 'rxjs/operators';

class ExampleEpicClass {
  exampleTimer() {
    return new Observable(subscriber => {
      this.timer(subscriber);
    });
  }

  timer(subscriber) {
    return new Promise(() => {
      setTimeout(() => {
        subscriber.next({state: 1});
      }, 3000);
    });
  }
}

const exampleClass = new ExampleEpicClass();

const exampleProcessActionEpic = (
  action$: ActionsObservable<Action>,
  state$: StateObservable<any>,
): Observable<Action> => {
  return action$.pipe(
    ofType(PROCESS_RESET_REDUCER),
    mergeMap(action =>
      exampleClass.exampleTimer().pipe(
        map(result => {
          return processResetReducer();
        }),
      ),
    ),
  );
};

export const exampleEpic = combineEpics(exampleProcessActionEpic);
