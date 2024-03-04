import {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { ActionType, ListReducer } from "./listReducer";

export interface listState {
  lists: any; // replace 'any' with the actual type of user
  isFetching: boolean;
  error: boolean;
}

// interface AuthContextProps {
//   state: AuthState;
//   dispatch: Dispatch<ActionType>; // Replace 'any' with the actual type of your actions
// }

const INITIAL_STATE = {
  lists: [],
  isFetching: false,
  error: false,
};

interface VideosContextProviderProps {
  children: ReactNode;
}

export const ListsContext = createContext<{
  state: listState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export const ListsContextProvider: React.FC<VideosContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

  return (
    <ListsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
