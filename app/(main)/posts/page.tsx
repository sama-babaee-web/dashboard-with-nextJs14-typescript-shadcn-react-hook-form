import PostTable from "@/components/posts/PostTable"
import BackButton from "@/components/BackButton"
import PostPagination from "@/components/posts/PostPagination"


function PostPage() {
  return (
    <>
    <BackButton text="Go Back" link="/"/>
    <PostTable />
    <PostPagination />
    </>
  )
}

export default PostPage