export interface payloadDefaultTypes {
  value?: number;
  error?: string;
  second: number;
}

export const ProcessState = Object.freeze({
  INIT: 'INIT',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
});
