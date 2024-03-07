// RootState.ts
import { IAuthState as AuthRootState } from './auth/authSlice';
import { IChatState as ChatRootState } from './chat/chatSlice';
import { IUserState as UserRootState } from './user/slice';
import { LoadingState as LoadingRootState } from './loader/slice';

interface RootState {
  auth: AuthRootState;
  loading: LoadingRootState;
  chat: ChatRootState;
  user: UserRootState;
}

export default RootState;