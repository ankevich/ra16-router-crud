const http = require("http");
const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");
const koaBody = require("koa-body");

const app = new Koa();

app.use(cors());
app.use(koaBody({ json: true }));

let posts = [
    {
        id: 1,
        content: "Quick brown fox jumps over the lazy dog",
        created: Date.now(),
    },
    {
        id: 2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        created: Date.now(),
    },
    {
        id: 3,
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        created: Date.now(),
    },
];
let nextId = 3;

const router = new Router();

router.get("/posts", async (ctx, next) => {
    ctx.response.body = posts;
});

router.post("/posts", async (ctx, next) => {
    const { id, content } = ctx.request.body;

    if (id) {
        const index = posts.findIndex(o => o.id === id);
        if (index !== -1) {
            posts[index] = { ...posts[index], content };
        }
    } else {
        posts.push({ ...ctx.request.body, id: nextId++, created: Date.now() });
    }
    ctx.response.status = 204;
});

router.get("/posts/:id", async (ctx, next) => {
    const postId = Number(ctx.params.id);
    const post = posts.find(o => o.id === postId);
    if (post) {
        ctx.response.body = post;
    } else {
        ctx.response.status = 404;
    }
});

router.delete("/posts/:id", async (ctx, next) => {
    const postId = Number(ctx.params.id);
    const index = posts.findIndex(o => o.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => {
    console.log(`server started http://localhost:${port}`);
});
