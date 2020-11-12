import { dateFormatter } from '../_utils.js';
const Posts = (props) => {
    const { config, contentTitle, blog, title } = props;
    return (React.createElement("section", { className: "main" },
        React.createElement("div", { className: "main_article" },
            React.createElement("article", null, contentTitle !== null && contentTitle !== void 0 ? contentTitle : (title && React.createElement("h1", null, title)),
                React.createElement("ul", { className: "main_posts" }, blog === null || blog === void 0 ? void 0 : blog.posts.map(({ title, link, date }) => (React.createElement("li", { key: link },
                    React.createElement("time", { dateTime: date.toString() }, dateFormatter['YYYY-MM-DD'](date)),
                    React.createElement("a", { href: `${config.root}${link}` }, title)))))))));
};
export default Posts;
