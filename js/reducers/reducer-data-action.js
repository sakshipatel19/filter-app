import DataReducer from './reducer-data.js';
export default function (state,action) {
  state = DataReducer();
  switch (action.type) {
    case "STATUS":
      let filteredData = [];
      state.map(data=>{
          if(data.status === action.e){
            filteredData.push(data);
          }
          else if(action.e === 'All'){
            filteredData.push(data);
          }
        });
        return filteredData;
        break;
      default:
        return state;
  }


}
