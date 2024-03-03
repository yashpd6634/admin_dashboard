import {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { ActionType, VideosReducer } from "./videoReducer";
import { VideoOutput } from "./videoActions";

export interface VideosState {
  videos: VideoOutput[] | null | undefined; // replace 'any' with the actual type of user
  isFetching: boolean;
  error: boolean;
}

// interface AuthContextProps {
//   state: AuthState;
//   dispatch: Dispatch<ActionType>; // Replace 'any' with the actual type of your actions
// }

const INITIAL_STATE = {
  videos: [],
  isFetching: false,
  error: false,
};

interface VideosContextProviderProps {
  children: ReactNode;
}

export const VideosContext = createContext<{
  state: VideosState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export const VideosContextProvider: React.FC<VideosContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(VideosReducer, INITIAL_STATE);

  return (
    <VideosContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
