import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Products {
  id: number | string;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductsState {
  data: Products[];
  dataCopy: Products[];
  loading: boolean;
  error: string | undefined;
}



export const EmptyState: ProductsState = {
  data: [],
  dataCopy: [],
  loading: false,
  error: undefined,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const data = await res.data;
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: EmptyState,
  reducers: {
    //   addProduct: (state, action: PayloadAction<Products>) => {
    //   state.data.push(action.payload)
    // },
    //   filterProduct: (state, action: PayloadAction<Products>) => {
    //   state.data = state.dataCopy.filter(
    //     (p) => p.id !== action.payload
    //   );
    // },
    //   resetProduct: (state) =>{
    //   state.dataCopy = []
    // },
    fetchProductsRequest: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Products>) => {
      state.loading = false;
      state.data = action.payload;
      state.dataCopy = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.dataCopy = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { } = productsSlice.actions;

export default productsSlice.reducer;
