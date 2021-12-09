function SearchBar() {
    return (
        <div class="col-md-9 col-md-push-1 vertical-center">
            <h3 class="text-center">Manage Users</h3>
            <div class="container">
                <div class="row">
                    <div class="col-xs-8 col-xs-offset-2">
                        <form action="#" method="get" id="searchForm" class="input-group">
                            <div class="input-group-btn search-panel">
                                <select name="search_param" id="search_param" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    <option value="all">All</option>
                                    <option value="username">Username</option>
                                    <option value="email">Email</option>
                                    <option value="studentcode">Student Code</option>
                                </select>
                            </div>
                            <input type="text" class="form-control" name="x" placeholder="Search term..."/>
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="submit">
                                <span class="glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchBar