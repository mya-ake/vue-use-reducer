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

export type State = Record<string, unknown>;
export type Action = {
  type: string;
};

export type Dispatch<A extends Action> = (action: A) => void;
export type Reducer<S extends State, A extends Action> = (
  state: S,
  action: A,
) => S;
export type ReturnValue<S extends State, A extends Action> = [
  DeepReadonly<S>,
  Dispatch<A>,
];
