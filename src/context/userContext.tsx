import { createContext, useReducer } from "react";

interface IstateType {
	user: { username: string | undefined; email: string | undefined };
}

const initialValue: IstateType = {
	user: { username: undefined, email: undefined },
};

interface IUserContextType {
	state: IstateType;
	dispatch: (action: IactionType) => void;
}

const UserContext = createContext<IUserContextType | null>(null);

export const enum ACTION_TYPE {
	ADD_USER,
}

interface IactionPayloadType {
	username?: string;
	email?: string;
}

interface IactionType {
	type: ACTION_TYPE;
	payload: IactionPayloadType;
}

const reducer = (state: IstateType, action: IactionType): IstateType => {
	switch (action.type) {
		case ACTION_TYPE.ADD_USER:
			return {
				...state,
				user: {
					username: action.payload.username,
					email: action.payload.email,
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
