import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    moduleId: null,
    moduleName: null,
};

export const moduleSlice = createSlice({
    name: "module",
    initialState,
    reducers: {
        setModuleInfo: (state, action) => {
            state.moduleId = action.payload.moduleId;
            state.moduleName = action.payload.moduleName;
        },
    },
});

export const { setModuleInfo } = moduleSlice.actions;

export const selectModuleId = (state) => state.module.moduleId;
export const selectModuleName = (state) => state.module.moduleName;

export default moduleSlice.reducer;