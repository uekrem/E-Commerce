import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase';
import toast from 'react-hot-toast';
import { query, where, getDocs, updateDoc, addDoc, collection, deleteDoc, doc } from 'firebase/firestore';

export const basketAdd = createAsyncThunk(
  'personalSpaces/basketAdd',
  async (data) => {
    let result, flag = 1;
    const querySnapshot = await getDocs(collection(db, 'basket'));
    for (let i = 0; i < querySnapshot.docs.length; i++) {
      const doc = querySnapshot.docs[i];
      const docRef = doc.ref;
      if (doc.data().data.id === data.data.id){
        result = await updateDoc(docRef, {count: doc.data().count + 1});
        flag = 0;
      }
    }
    if (flag){
      result = await addDoc(collection(db, "basket"), data);
    }
    return result;
  }
)

export const deleteBasket = createAsyncThunk(
  'personalSpaces/deleteBasket',
  async (id) => {
    await deleteDoc(doc(db, "basket", id));
  }
)

export const addFavorite = createAsyncThunk(
  'personalSpaces/addFavorite',
  async (data) => {
    await addDoc(collection(db, "favorite"), data);
  }
)

export const addOrdering = createAsyncThunk(
  'personalSpaces/addOrdering',
  async ({data, uid}) => {
    await addDoc(collection(db, "ordering"), data);
    const queryR = query(collection(db, "basket"), where("uid", "==", uid));
    const querySnapshot = await getDocs(queryR);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }
)

export const deleteFavorite = createAsyncThunk(
  'personalSpaces/deleteFavorite',
  async (id) => {
    await deleteDoc(doc(db, "favorite", id));
  }
)

export const countDecrease = createAsyncThunk(
  'personalSpaces/countDecrease',
  async (data) => {
    const querySnapshot = await getDocs(collection(db, 'basket'));
    for (let i = 0; i < querySnapshot.docs.length; i++) {
        const doc = querySnapshot.docs[i];
        const docRef = doc.ref;
        if (doc.data().data.id === data.data.id && doc.data().count > 1){
            await updateDoc(docRef, {count: doc.data().count - 1});
            toast.success("Deleted successfully")
        }
    }
  }
)

export const popUpShow = createAsyncThunk(
  'personalSpaces/popUpShow',
  async (state) => {
    if(!state)
      await new Promise((resolve) => setTimeout(resolve, 300));
    return true;
  }
)

export const addComment = createAsyncThunk(
  'personalSpaces/addComment',
  async ({data, orderDisplay, text, rating}) => {

    const {listProduct} = orderDisplay;
    let newProduct = listProduct;
    for(let i = 0; i < orderDisplay.listProduct.length; i++){
      if (orderDisplay.listProduct[i].data.id === data.data.id){
        newProduct = newProduct.filter((_, index) => index !== i);
        newProduct = [...newProduct, {...listProduct[i], comment:1}]
      }
    }
    const washingtonRef = doc(db, "ordering", orderDisplay.id);
    await updateDoc(washingtonRef, {...orderDisplay, listProduct:newProduct});
    await addDoc(collection(db, "comment"), {name:orderDisplay.cargoInform.name, productId:data.data.id, date:orderDisplay.orderDate, text, rating});  
    return {...orderDisplay, listProduct:newProduct};
  }
)

const initialState = {
  listBasket: [],
  listFavorite: [],
  listOrder: [],
  orderDisplay: [],
  isPopupChanging: false,
  isLoadingPersonal: false,
  isAuthenticated: false,
}

const personalSpaces = createSlice({
  name: 'personalSpaces',
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.listBasket = action.payload
    },
    setFavorite: (state, action) => {
      state.listFavorite = action.payload
    },
    setOrder: (state, action) => {
      state.listOrder = action.payload
    },
    setOrderDisplay: (state, action) => {
      state.orderDisplay = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(basketAdd.fulfilled, (state) => {
      state.isLoadingPersonal = false;
      toast.success('Successfully Add Basket');
    })
    builder.addCase(basketAdd.pending, (state) => {
      state.isLoadingPersonal = true;
    })
    builder.addCase(basketAdd.rejected, (state) => {
      state.isLoadingPersonal = false;
      toast.error('Failed Add Basket')
    })
    builder.addCase(deleteBasket.fulfilled, (state) => {
      state.isLoadingPersonal = false;
      toast.success('Successfully Deleted Basket');
    })
    builder.addCase(deleteBasket.pending, (state) => {
      state.isLoadingPersonal = true;
    })
    builder.addCase(deleteBasket.rejected, (state) => {
      state.isLoadingPersonal = false;
      toast.error('Failed Deleted Basket')
    })
    builder.addCase(countDecrease.fulfilled, (state) => {
      state.isLoadingPersonal = false;
      toast.success('Successfully Deleted Basket');
    })
    builder.addCase(countDecrease.pending, (state) => {
      state.isLoadingPersonal = true;
    })
    builder.addCase(countDecrease.rejected, (state) => {
      state.isLoadingPersonal = false;
      toast.error('Failed Deleted Basket')
    })
    builder.addCase(addFavorite.fulfilled, (state) => {
      state.isLoadingPersonal = false;
      toast.success('Successfully Add Favorite');
    })
    builder.addCase(addFavorite.pending, (state) => {
      state.isLoadingPersonal = true;
    })
    builder.addCase(addFavorite.rejected, (state) => {
      state.isLoadingPersonal = false;
      toast.error('Failed Add Favorite')
    })
    builder.addCase(deleteFavorite.fulfilled, (state) => {
      state.isLoadingPersonal = false;
      toast.success('Successfully Deleted Favorite');
    })
    builder.addCase(deleteFavorite.pending, (state) => {
      state.isLoadingPersonal = true;
    })
    builder.addCase(deleteFavorite.rejected, (state) => {
      state.isLoadingPersonal = false;
      toast.error('Failed Deleted Favorite')
    })
    builder.addCase(addOrdering.fulfilled, (state) => {
      state.isLoadingPersonal = false;
    })
    builder.addCase(addOrdering.pending, (state) => {
      state.isLoadingPersonal = true;
    })
    builder.addCase(addOrdering.rejected, (state) => {
      state.isLoadingPersonal = false;
    })
    builder.addCase(popUpShow.fulfilled, (state) => {
      state.isLoadingPersonal = false;
      state.isPopupChanging = !state.isPopupChanging;
    })
    builder.addCase(popUpShow.pending, (state) => {
      state.isLoadingPersonal = true;
    })
    builder.addCase(popUpShow.rejected, (state) => {
      state.isLoadingPersonal = false;
    })
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.isLoadingPersonal = false;
      state.orderDisplay = action.payload;
    })
    builder.addCase(addComment.pending, (state) => {
      state.isLoadingPersonal = true;
    })
    builder.addCase(addComment.rejected, (state) => {
      state.isLoadingPersonal = false;
    })
  }
})

export const { setBasket, setFavorite, setOrder, setOrderDisplay} = personalSpaces.actions

export default personalSpaces.reducer