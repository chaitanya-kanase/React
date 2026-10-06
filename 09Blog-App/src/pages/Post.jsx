import React, { useState, useEffect } from 'react'
import { Button, Container } from '../components/index'
import service from '../appWrite/config'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'

function Post() {

    const [post, setPost] = useState(null)
    const [imgUrl, setImgUrl] = useState("")

    const navigate = useNavigate()
    const { slug } = useParams()

    const userData = useSelector((state) => state.auth.userData)

    const isAuther = post && userData ? post.userId === userData.$id : false

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                } else {
                    navigate('/')
                }
            })

        } else {
            navigate('/')
        }
    }, [slug, navigate])

    useEffect(() => {
        const getImage = async () => {
            if (post?.featuredImg) {

                const url = await service.getFileView(post.featuredImg)


                setImgUrl(url)
            }
        }

        getImage()
    }, [post])

    const deletePost = () => {
        service.deletePost(post.$id).then((state) => {
            console.log(state)
            if (state) {
                service.deleteFile(post.featuredImg)
                navigate('/')
            }
        })
    }

    return post ? (
        <div className="w-full py-8">
            <Container>
                <div className="w-full flex flex-col items-center border rounded-xl p-4">

                    {/* Image */}
                    <div className="w-full flex justify-center mb-6">
                        {imgUrl && (
                            <img
                                src={imgUrl}
                                alt={post.title}
                                className="w-full max-w-4xl h-115 object-contain rounded-xl "
                            />
                        )}
                    </div>

                    {/* Buttons */}
                    {isAuther && (
                        <div className="w-full flex gap-3 mb-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="green-500">
                                    Edit
                                </Button>
                            </Link>

                            <Button
                                bgColor="red-500"
                                onClick={deletePost}
                            >
                                Delete
                            </Button>
                        </div>
                    )}

                    {/* Title */}
                    <div className="w-full mb-4">
                        <h1 className="text-3xl font-bold">
                            {post.title}
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="w-full browser-css">
                        {parse(post?.content || "")}
                    </div>

                </div>
            </Container>
        </div>
    ) : null
}

export default Post
