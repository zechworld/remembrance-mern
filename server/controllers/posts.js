// Relative imports
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postList = await PostMessage.find();

        res.status(200).json(postList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const postData = req.body;
    const newPost = new PostMessage(postData);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
