export const API_ROOT = "https://www.reddit.com";

export const getSubreddits = async () => {
    const response = await fetch(`${API_ROOT}r/news.json`);
    const json = await response.json();
    
    return json.data.children.map((subreddit) => subreddit.data);
};

