import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET } from '../utilities/ApiProvider';
import Cookies from 'js-cookie';

// Basic Global State
const initialState = {
    ColorCode : '#dc0b9b'
};


// Function For Request Handling For State Update
export const fetchUserName = createAsyncThunk('fetchuser', async () => {
  const response = await GET(`https://jsonplaceholder.typicode.com/users`);
  return { name: response[Math.floor(Math.random() * 10)].name };
});

// State Updating Functions
const userReducer = createSlice({
  name: 'person',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
      Cookies.set('user', JSON.stringify(action.payload));
    },
    loadUser: (state, action) => {
      state.value = action.payload;
    },
    updateUser: (state, action) => {
      state.value = action.payload;
    },
    updateBarInfo: (state, action) => {
      state.value.barinfo = action.payload;
    },
    updateColor: (state, action) => {
        state.ColorCode = action.payload;
        localStorage.setItem('Colorcode', action.payload);
      },
      logout: (state, action) => {
        localStorage.clear();
        Cookies.remove('user');
        state.value = null;
      },
    
  },

  // loadLocalStorage: (state, action) => {
  //     state.value = action.payload;
  //     localStorage.setItem('user', JSON.stringify(action.payload))
  // },
  // loadCookies: (state, action) => {
  //     state.value = action.payload;
  //     Cookies.set('user', JSON.stringify(action.payload))
  // },
 
});

// Exporting All the State Updating Functions
export const {
  updateUser,
  updateName,
  loadUser,
  loadLocalStorage,
  loadCookies,
  logout,
  updateBarInfo,
  updateColor
} = userReducer.actions;
export default userReducer.reducer;
