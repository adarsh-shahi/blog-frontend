import { createContext, useReducer } from "react";

interface IstateType {
	user: { username?: string; email?: string; token?: string };
}

const initialValue: IstateType = {
	user: { username: undefined, email: undefined, token: undefined },
};

interface IUserContextType {
	state: IstateType;
	dispatch: (action: IactionType) => void;
}

const UserContext = createContext<IUserContextType | null>(null);

export const enum ACTION_TYPE {
	ADD_USER,
}

interface IactionType {
	type: ACTION_TYPE;
	payload: IstateType;
}

const reducer = (state: IstateType, action: IactionType): IstateType => {
	switch (action.type) {
		case ACTION_TYPE.ADD_USER:
			return {
				...state,
				user: {
					username: action.payload.user.username,
					email: action.payload.user.email,
					token: action.payload.user.token,
				},
			};
		default:
			throw new Error("unhandled action type");
	}
};

interface IProviderProps {
	children: React.ReactNode;
}

export default function Provider({ children }: IProviderProps) {
	const [state, dispatch] = useReducer(reducer, initialValue);

	const contextValue: IUserContextType = {
		state,
		dispatch,
		
	};

	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
}

export { UserContext };
