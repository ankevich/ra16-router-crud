import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

function App() {
    return (
        // список постов
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts/new" element={<NewPost />} />
            </Routes>
        </Router>
    );
}

const NewPost = () => {
    return (
        <div className="post-form">
            <div className="post-form__actions">
                <NavLink className="menu__item" to="/">
                    ❌
                </NavLink>
                <textarea className="post-form__textarea" placeholder="Введите текст поста" />
                <button className="post-form__submit">Опубликовать</button>
            </div>
        </div>
    );
};

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
                        <div className="post__text">Текст поста</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
