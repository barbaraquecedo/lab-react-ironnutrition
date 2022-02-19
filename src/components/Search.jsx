import React, { Component } from "react";

function Search({search, onSearch}){
    
        return(
            <div className="mb-3">
                <form>
                    <input 
                        className="form-control" 
                        value={search} 
                        onChange={(event) => onSearch(event.target.value)}
                    />
                </form>
            </div>
        )
    
}

export default Search;