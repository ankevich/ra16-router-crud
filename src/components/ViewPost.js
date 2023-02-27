import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ViewPost = () => {
    return (
        <StyledViewPost>
            <NavLink className="menu__item" to="/">
                ❌
            </NavLink>
                <div className="post__text">Текст поста</div>
            <div className="post__actions">
                <NavLink className="post__edit" to="/posts/1/edit">
                    Редактировать
                </NavLink>
                <button className="post__delete">Удалить</button>
            </div>
        </StyledViewPost>
    );
};

const StyledViewPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .post__actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        .post__delete {
            margin-right: 10px;
        }
    }`

export default ViewPost;