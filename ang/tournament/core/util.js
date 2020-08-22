function locationRoot(){
    return (location.search.includes("?page=CiviCRM") ? "~" : location.origin);
}