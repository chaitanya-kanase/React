
import {PostCard,Container} from '../components/index'
import {useEffect, useState} from 'react'
import service from '../appWrite/config'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        service.getPosts()
        .then((posts)=>{
            if(posts){
                setPosts(posts.rows)
            }
        })
        .catch((e)=>{

            throw e
            
        })
    },[])

  return (
    <div className='w-full py-8'>
      <Container>
        <div className = 'flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post?.$id} className='w-1/4 px-4 '>
                    <PostCard {...post}/>
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
