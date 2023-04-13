import React from "react";

export class SearchBar extends React.Component {
    state = {
        searchText: '',
    }

    onChange = (e) => { 
        this.setState({searchText: e.currentTarget.value})
    }

    onSubmit = (e) => { 
        e.preventDefault();

        this.props.onSubmit(this.state.searchText);
        this.resetSearch();
    }

    resetSearch = () => { 
        this.setState({searchText: ''})
    }

    render() { 
        return (
            <header class="searchbar">
                <form class="form" onSubmit={this.onSubmit}>
                <button type="submit" class="button">
                    <span class="button-label">Search</span>
                </button>

                <input
                    class="input"   
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.searchText}
                    onChange={this.onChange}
                />
            </form>
            </header>)
    }
}