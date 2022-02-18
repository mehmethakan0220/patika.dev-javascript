var sleep = require("system-sleep");

var blogs = [
    {id:0, title:"JS Async", date:"2020"},
    {id:1, title:"JS Promise", date:"2021"},
    {id:2, title:"JS Callback", date:"2022"},
    {id:3, title:"JS Await", date:"2023"},
]


const showBlogs = async (blog,callBack)=>{
    await callBack(blog);
    blogs.forEach(blog=>{
        console.log(
            `id:${blog.id}) Blog Başlığ: ${blog.title}, Oluşturulma Tarihi:${blog.date}`
        )
    })
}
const addBlog = async (item)=>{
    sleep(2000);
    blogs.push(item);
    console.log("new blog added to blogs");
}
showBlogs({id:4, title:"Node.js", date:Date()},addBlog);
