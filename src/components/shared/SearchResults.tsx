import { Models } from "appwrite";
import { Loader } from "lucide-react";
import GridPostList from "./GridPostList";

type seachResultsProps={
  isSearchFetching:boolean,
  searchedPosts:Models.Document[];
}
const SearchResults = ({isSearchFetching,searchedPosts}: seachResultsProps) => {

    if( isSearchFetching) return <Loader/>
    if( searchedPosts && searchedPosts?.length>0) {
      return(
    <GridPostList posts={searchedPosts} />
    )
  } 
    return (
     <p className=" text-light-4 mt-10 text-center w-full">No results found</p>
    )
   

  
}

export default SearchResults