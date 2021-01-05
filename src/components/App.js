import unsplash from "../api/unsplash";
import react from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends react.Component {
   state = { images: [] };

   onSearchSubmit = async (term) => {
      const Response = await unsplash.get("/search/photos", {
         params: { query: term },
      });

      this.setState({ images: Response.data.results });
   };

   render() {
      return (
         <div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSearch={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
         </div>
      );
   }
}

export default App;
