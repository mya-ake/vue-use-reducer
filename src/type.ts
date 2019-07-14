type Unwrap<T> = T extends { [k: string]: infer U }
  ? U
  : T extends (infer U)[]
  ? U
  : T;
type isPrimitive<T> = T extends Unwrap<T> ? T : never;

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends isPrimitive<T[P]>
    ? T[P]
    : DeepReadonly<T[P]>;
};

export namespace VueUseReducer {
  export interface State {
    [key: string]: unknown;
  }
  export interface Action {
    type: string;
  }
  export type Dispatch<A> = (action: A) => void;
  export type Reducer<S, A> = (state: S, action: A) => S;
  export type ReturnValue<S, A> = [DeepReadonly<S>, VueUseReducer.Dispatch<A>];
}
