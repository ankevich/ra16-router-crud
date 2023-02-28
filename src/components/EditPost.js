import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EditPost = () => {
    const [post, setPost] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:7777/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPost(data)
            })
    }, [])

    const UpdatePost = () => {
        fetch(`http://localhost:7777/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }).then(data => {
            console.log(data)
        })
    }
    return (
        <StyledNewPost>
            <NavLink className="menu__item" to="/">
                ❌
            </NavLink>
            <textarea
                className="post-form__textarea"
                placeholder="Введите текст поста"
                value={post.content}
                onChange={event => setPost({ ...post, content: event.target.value })}
            />
            <button
                className="post-form__submit"
                onClick={() => {
                    UpdatePost()
                }}
            >
                Сохранить
            </button>
        </StyledNewPost>
    )
}

const StyledNewPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .post-form__textarea {
        height: 100px;
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: none;
    }
`

export default EditPost
