import {Action} from 'redux';
import {
  ActionsObservable,
  combineEpics,
  ofType,
  StateObservable,
} from 'redux-observable';
import {asyncScheduler, Observable, of} from 'rxjs';
import {getGorestEpicAction, getGorestEpicToSuccessAction} from './gorestSlice';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {getAll} from './API';

class GoRestClass {
  goRestGetAll() {
    //Observable 은 시간 흐름에 따라 발생하는 이벤트들의 집합이다. 단순하게 이벤트 스트림으로서 생각해 볼 수 있다.
    return new Observable(subscriber => {
      this.getAllProcess(subscriber);
    });
  }
  getAllProcess(subscriber) {
    return getAll().then(result => {
      subscriber.next({gorest: result});
    });
  }
}

const goRestClass = new GoRestClass();

const getListActionEpic = (
  action$: ActionsObservable<Action>,
  state$: StateObservable<any>,
): Observable<Action> => {
  return action$.pipe(
    ofType(getGorestEpicAction),
    //filter(action => action.type === getGorestEpicAction)과 동일
    //파이프에서 수행할 action을 가져온듯.
    mergeMap((action: any) =>
      goRestClass.goRestGetAll().pipe(
        map((result: any) => {
          return getGorestEpicToSuccessAction({
            gorest: result.gorest,
          });
        }),
      ),
    ),
  );
};

export const gorestEpic = combineEpics(getListActionEpic);

//combine : 합치다.
