import React, { useState,useEffect,useCallback} from 'react'
import { Button, Input, RTE, Select } from '../index'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import service from '../../appWrite/config'
import { useForm } from 'react-hook-form'


export default function PostForm({ post }) {

  const { register, handleSubmit, setValue, getValues, watch, control } = useForm({
    defaultValues: {
      title: post ? post.title : '',
      content: post ? post.content : '',
      slug: post ? post.$id : '',
      status: post ? post.status : 'active',
    }
  })

  const navigate = useNavigate()
  const useData = useSelector(state => state.auth.userData);
  const [imgUrl , setImgUrl] = useState("")

  useEffect(()=>{
    const getUrl = async()=>{
      if(post?.featuredImg){
        const url = await service.getFileView(post.featuredImg)
      setImgUrl(url)
      }
      
    }

    getUrl()
  },[])

  const submit = async (data) => {

    if (post) {
      const file = data.image[0] ? await service.uploadFile(data.image[0]) : null
      if (file) {
        service.deleteFile(post.featuredImg)
      }
      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredImg: file ? file.$id : undefined
      })

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    } else {
      const file = await service.uploadFile(data.image[0])

      if (file) {
        const fileId = file.$id;
        const dbPost = await service.createPost({
          ...data,
          featuredImg: file.$id,
          userId: useData.$id,
        })

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true, shouldDirty: true });
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            {imgUrl && (<img
              src={imgUrl}
              alt={post.title}
              className="rounded-lg"
            />)}
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "green-500" : undefined} className="w-full">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  )
}
