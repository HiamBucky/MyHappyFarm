import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider, db, auth } from "../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const initialState = {
	token: null,
	isAuthenticated: false,
	user: {},
	loading: false,
	error: {},
};

export const signin = createAsyncThunk("auth/signin", async () => {
	const auth = getAuth();
	const currentUser = await signInWithPopup(auth, provider)
		.then(async (result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = await GoogleAuthProvider.credentialFromResult(result);

			const docRef = doc(db, "users", result.user.uid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				console.log("Document data:", docSnap.data());
			} else {
				const user = {
					displayName: result.user.displayName,
					email: result.user.email,
					photoUrl: result.user.photoURL,
					uid: result.user.uid,
				};
				await setDoc(doc(db, "users", result.user.uid), user);
			}

			const user = {
				token: credential.accessToken,
				isAuthenticated: true,
				user: {
					email: result.user.email,
					displayName: result.user.displayName,
					photoURL: result.user.photoURL,
					uid: result.user.uid,
				},
			};
			return user;
		})
		.catch((error) => console.log(error));
	return currentUser;
});

export const signOut = createAsyncThunk("auth/signOut", async (state) => {
	await auth.signOut();
});

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(signin.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(signin.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error;
		});
		builder.addCase(signin.fulfilled, (state, action) => {
			state.loading = false;
			state.token = action.payload.token;
			state.isAuthenticated = action.payload.isAuthenticated;
			state.user = action.payload.user;
		});
		builder.addCase(signOut.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(signOut.fulfilled, (state) => {
			state.isAuthenticated = false;
		});
	},
});

export const {} = authSlice.actions;

export default authSlice.reducer;