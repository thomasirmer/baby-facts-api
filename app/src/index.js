import Express from "express";

const app = Express();
const port = 3000;

const adjectives = [
    "cute", "adorable", "good-smelly", "tiny", "soft", "always hungry"
];

app.use(Express.json());

app.get("/", (req, res) => {
    const adjectiveIdx = Math.floor(Math.random() * adjectives.length);
    res.json({message: `Babies are ${adjectives[adjectiveIdx]}`});
});

app.listen(port, () => `App listening on port ${port}`);