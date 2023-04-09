import React from "react";

export class SearchBar extends React.Component { 
    state = {
        searchText: '',
    }

    onInputChange = (e) => { 
        this.setState({searchText: e.currentTarget.value})
    }

    onSubmit = (e) => { 
        e.preventDefault();

        this.props.onSubmit(this.state.searchText);
        this.resetForm();
    }

    resetForm = () => { 
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
                        onChange={this.onInputChange}
                    />
                </form>
            </header>
        )
    }
}