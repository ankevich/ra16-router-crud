import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import styled from "styled-components";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts/new" element={<NewPost />} />
                <Route path="/posts/:id" element={<ViewPost />} />
                <Route path="/posts/:id/edit" element={<EditPost />} />
            </Routes>
        </Router>
    );
}

const NewPost = () => {
    return (
        <StyledNewPost>
            <NavLink className="menu__item" to="/">
                ❌
            </NavLink>
            <textarea className="post-form__textarea" placeholder="Введите текст поста" />
            <button className="post-form__submit">Опубликовать</button>
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

const HomePage = () => {
    return (
        <>
            <div className="post-form">
                <div className="post-form__actions">
                    <NavLink className="menu__item" to="/posts/new">
                        Создать пост
                    </NavLink>
                </div>
            </div>
            <div className="posts">
                <div className="post">
                    <div className="post__content">
                        <NavLink className="post__text" to="/posts/1">
                            Текст поста
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

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

const EditPost = () => {
    return (
        <StyledNewPost>
            <NavLink className="menu__item" to="/">
                ❌
            </NavLink>
            <textarea className="post-form__textarea" placeholder="Введите текст поста" />
            <button className="post-form__submit">Сохранить</button>
        </StyledNewPost>
    ); };

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
    }



`

export default App;
