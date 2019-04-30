export interface Action {
  type: string;
}
export type Dispatch<A> = (action: A) => void;
export type Reducer<S, A> = (state: S, action: A) => void;
