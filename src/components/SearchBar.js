import react from "react";

class SearchBar extends react.Component {
   state = { term: "" };

   onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onSearch(this.state.term);
   };

   render() {
      return (
         <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>Image search</label>
                  <input
                     value={this.state.term}
                     placeholder="Search for anything, e.g., pizza"
                     onChange={(e) => this.setState({ term: e.target.value })}
                     type="text"
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;
