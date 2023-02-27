import { NavLink } from "react-router-dom";

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

export default HomePage;