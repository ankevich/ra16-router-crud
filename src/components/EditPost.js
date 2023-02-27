import { NavLink } from "react-router-dom";
import styled from "styled-components";

const EditPost = () => {
    return (
        <StyledNewPost>
            <NavLink className="menu__item" to="/">
                ❌
            </NavLink>
            <textarea className="post-form__textarea" placeholder="Введите текст поста" />
            <button className="post-form__submit">Сохранить</button>
        </StyledNewPost>
    );
};

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
`;

export default EditPost;
