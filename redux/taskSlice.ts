import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import build from "next/dist/build";
import { RootState } from "./store";

export const getCommentsApi = createAsyncThunk(
  "task/fetchByComment",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi

    rejectWithValue('error')
    const data = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10').then(res => res.json()).catch(err => rejectWithValue(err))
    return data
  }
)
const TaskAdaptor = createEntityAdapter<Task>({
  selectId: (task) => task.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
})
const taskSlice = createSlice({
  name: 'task',
  initialState: TaskAdaptor.getInitialState({ errormessage: '' }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCommentsApi.fulfilled, (state, action) => {
      TaskAdaptor.setAll(state, action.payload)
    }).addCase(getCommentsApi.rejected, (state, action) => {
      state.errormessage = action.error.message as string
      console.error(action)
    })
  },
})

export const { selectAll: taskSelectorAll} = TaskAdaptor.getSelectors<RootState>(state => state.task)
export default taskSlice.reducer