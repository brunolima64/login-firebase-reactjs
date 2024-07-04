import * as C from './styles';
import './App.css';
import { MainRoutes } from "./Routes/MainRoutes";
import { SignInContextProvider } from './contexts/SignInContext';
import { IsLoggedCtxProvider } from './contexts/IsLoggedcontext';
import { UserLoggedProvider } from './contexts/UserLogged';


export const App = () => {

	return (
		<IsLoggedCtxProvider>
			<SignInContextProvider>
				<UserLoggedProvider> 
					<C.PageContainer>
						<MainRoutes />
					</C.PageContainer>
				</UserLoggedProvider>
			</SignInContextProvider>
		</IsLoggedCtxProvider>
	)
}

export default App;